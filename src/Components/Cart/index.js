import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setCarts, clearCart } from '../../redux/modules/itenscarts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ContainerCart, ItensCart , ItensCartTitle, TotalValue, ItensCartFrete, ItensCartHeader, AlertItens, ButtonConfirm, Out} from "./styles";
import {getDistance} from 'geolib'
import infos from "../../dates/info";
import { statusModal } from "../../dates/statusModal";
import moment from 'moment';
import Hours from "../hours";
import Maps from "../Maps";
import Modal from '../Modal';
import dates from "../../dates";
import axios from "axios";







const Cart =(props)=>{
    const dispatch = useDispatch()
    const cart= useSelector((state)=> state.itenscarts.carts)
    const location1=useSelector((state)=> state.itenscarts.location.reverse())
    
    let count =1;
    const [locationArray, setLocationArray]= useState(0)
    const [totalFrete, setTotalFrete]= useState(0)
    const [modalIsOpen, setIsOpen]= useState(false)
    const [contentModal, setContentModal] = useState(3)
    const [date, setDate] = useState('')
    const [qtd, setQtd] = useState(0)
    const [valueSelf, setValueSelf]= useState(0)
    const [permiss, setPermiss]= useState(false)
    const [out, setOut]=useState(false)
    const [address,setAddress]= useState('')
    const [pedido, setPedido] = useState('')
 

    useEffect(()=>{
       
        let filtersMarker = cart.filter((el)=> el.marker===false && el.self===true)
        let filtersSelf = cart.filter((el)=> el.self==false && el.marker===false)
        updateItens()
      if(filtersMarker.length===0){
        setPermiss(true)
      }
      else if(filtersMarker.length===0 && filtersSelf.length>0){
        setPermiss(true)

      }
      else{
        setPermiss(false)
      }

     
      
      

    },[cart])

    function updateItens(){
      
        let count=0;
        cart.forEach((el)=>{
            if(el.marker===true && el.self===true){
                count ++
            }
            

        })
        
        if(count %2===1){
           
            let markers = cart.filter((el)=> el.marker===true && el.self==true)
            console.log(markers)
            markers[markers.length-1].marker=false
            setPermiss(false)
            dispatch(setCarts( markers[markers.length-1]))
        }
    }

    function openModal(param){
        const item =  filterQtd(param)
        setIsOpen(true)
      
        setDate(param)
        if(item.length>0){
         
            setQtd(item[0].qtd)
        }
        
        setContentModal(1)
      
        document.getElementById('section-1').scrollIntoView()
     
      
        document.body.style.overflow = 'hidden'
    }

    function closeModal(){
        setIsOpen(false)      
        document.body.style.overflow = 'auto'
        setContentModal(statusModal[0].status)
        setQtd(0) 
    }

    function addQtd(){
        setQtd(qtd+1)
    }
    function removeQtd(){
        if(qtd>=1){
            setQtd(qtd-1)
        }
        
    }

    function openModalOut(){
        //colocar restrições do out 

        setIsOpen(true)
        
        setContentModal(4)
      setOut(true)
      
        document.getElementById('section-1').scrollIntoView()
     
      
        document.body.style.overflow = 'hidden'
    }

 
    function filterQtd(item){
        const result = cart.filter((element)=> element.id===item.id )
       
        return result
     }
  
  


    function addCart(itemCart){
        const item = {...itemCart, qtd: qtd, date: moment()}
        
        

        const id = item.id
       
       
    
        //buscar cart e verificar o id 
        if(cart.length>0){
        
            const search = cart.filter(item => item.id ===id)

           
           
            search.length >0 ? dispatch(setCarts(sumQtd(item))) : dispatch(setCart(item))
        }
        else{
            dispatch(setCart(item))
        }    
       
        
     // pegar os dados , se os dados forem desta hora , eu adiciono se não eu substituo


        
        const localItem = JSON.parse(localStorage.getItem('Cart'))
        
        if(localItem){
            const timeNow = moment().format('HH');
            const timeRegister= moment(localItem.date).format('HH')
          
            const itens = (timeNow - timeRegister)>2 ? sumQtd(item) : item
            
            localStorage.setItem('Cart', JSON.stringify(itens))
        }
        else{
            localStorage.setItem('Cart', JSON.stringify(item))
        }
        
        setContentModal(2)
     
     
    
    }
    function sumQtd(item){
        
        const id = item.id
      
       /*  item.qtd = parseInt(item.qtd) + qtd */
        item.qtd =  qtd
       
    
        return item
        
        
     

    }
       
useEffect(()=>{
    setLocationArray(location1.reverse())

     /* location1.length >0 ? setOut(false): setOut(true) */
    
    totalT(location1.reverse())
},[location1])




function total(qtd, price, itemCart){
    
   

     
    return parseFloat(qtd * parseFloat(price)).toFixed(2)

}
function totalT (param){
    let initValue = 0
    if(param.length>0){
   
     initValue = param[0][0].value

 }
     let sum= initValue;
    cart.forEach((item)=>{

        sum = sum + (item.qtd * parseFloat(item.price))
    })
    setTotalFrete(sum)
    
}

function setChangeModal(param){
    setContentModal(param)
    
}
    function clearCartItem(param){
        // verificar param id é igual aos meias 
        // trocar meia id  e marker por false verificando
   
        
        dispatch(clearCart(param)) 

    
        
        
         
    
      
    }
    function getAddress(address){
        console.log(address)
       setAddress(address)
    }
     function sendMessage(){
        console.log(cart)
        let messages=`######## Novo Pedido ########  \n \n`
        let compra = cart.map((el)=>{
           messages += `Nome produto : ${el.title} \n Quantidade: ${el.qtd} Preço : ${el.price} \n`
        })
        messages += `\n ##### Endereço de Entrega ##### \n${address} \n Frete : ${location1.reverse()[0][0].value.toFixed(2)} \n Total ${totalFrete.toFixed(2)}\n ####### Fim do Pedido #######\n`
       
        
        
axios.post("http://189.126.111.155:8082/send-message",{
    
        number: "5511969748216@c.us",
        message : messages
      }).then(res=> {console.log(res.data.response._data.body);
    /* setPedido(res.data.response._data.body) */
})  

/*     fetch('http://189.126.111.155:8000/send-message',{
        method: 'POST',
        body: JSON.stringify({
            number: "5511969748216@c.us",
        message : messages
        }).then((response)=> response.json())
    }).then((json)=> console.log(json)) */
       
    }

   
   

 

    return(
          <>
         <Modal
    open={modalIsOpen} 
    openModal={openModal}
    closeModal={closeModal}
    date={date}
    content={contentModal}
    qtd={qtd} 
    addCart={()=>addCart(date)}
    onClickMinus={()=>removeQtd()}  onClickPlus={()=>addQtd()}
    
    
    continue={closeModal}
    />
       <ContainerCart >

        {cart.length>0 ? <ItensCartTitle>

       <div>Item</div>
       <div>Qtde</div>
       <div>Prato</div>
       <div>Preço</div>
       <div>Total</div>

        </ItensCartTitle> : null}
        {cart.length>0? 
       
       cart.map((item)=>(
           <>
           <ItensCart key={item.id} >
        <div>{count++}</div>
        <div onClick={()=>openModal(item)}>{item.qtd===0 ? '1/2' : item.qtd}</div>
        <div>{item.title}</div>
        <div>R${parseFloat(item.price).toFixed(2)}</div>

        <div>           
            R${total(item.qtd, item.price, item)}</div>
           
    <FontAwesomeIcon  onClick={()=> clearCartItem(item)} transform="down-2 left-2"  size="lg" color='red' icon={faTrashCan}/>

    </ItensCart>
{/*     <div onClick={()=> clearCartItem(item)}>Excluir</div> */}
      </> 
    )) 
    
    
    
    : <div>nao tem item</div>}

 
      {out ? <Out> *** Fora do Campo de Entrega ***</Out>: null}
    {location1 && location1.length>0 && permiss && !out ? 
    
    <ItensCartFrete><div>Frete: </div>R$ {location1.reverse()[0][0].value.toFixed(2)}</ItensCartFrete>: null}
   {cart.length>0 && location1.length>0 && permiss && !out ?  <><ItensCartFrete> Total: R$ 
   
   {totalFrete.toFixed(2)}</ItensCartFrete> </> : null}
  
    </ContainerCart>
{cart.length>0 &&  permiss===false? 

<AlertItens>*** Faltam 1/2 pizzas para completar uma pizza inteira ***</AlertItens>: null}
    {cart.length>0 && permiss?  <Maps address={getAddress} changecontent={setChangeModal} out={openModalOut}  /> :null }


{/*     {location1 && location1.length>0 && permiss ?  : null } */}
   {/*  <Hours changecontent={setChangeModal} out={openModal}/> */}
  
   <ButtonConfirm onClick={()=> sendMessage() }>Fechar</ButtonConfirm>
        </> 
        
        )
   
}
export default Cart;
