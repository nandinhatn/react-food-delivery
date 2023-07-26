import react, {useState, useEffect, } from 'react';
import {Container,ContainerCards, Wrapper, Title, TitleCategoria, Footer} from './styles';
import { useDispatch,useSelector } from 'react-redux';
import { setCart, setCarts } from '../../redux/modules/itenscarts';
import moment from 'moment';
import { statusModal } from "../../dates/statusModal";
import CardsFood from '../CardsFood';
import Modal from '../Modal'
import dates from '../../dates'
import { json } from 'react-router';
/* import categories from '../../dates/categorias'; */

import api from "../../dates/api"
const ContainerCardsComp =(prop)=>{
   
    const dispatch = useDispatch()
    const cart= useSelector((state)=> state.itenscarts.carts)
    const products = useSelector((state)=> state.itenscarts.products)
    const productSelected= useSelector((state)=> state.itenscarts.productSelected)
    const [modalIsOpen, setIsOpen]= useState(false)
    const [contentModal, setContentModal] = useState(0)
    const [date, setDate] = useState('')
    const [qtd, setQtd] = useState(0)
    const [categorie, setCategorie]= useState([])    
    const [produtsExib, setProdutsExib] = useState([...products])
    const [self, setSelf] = useState(false)
    const [categories, setCategories]= useState('')
    
    
    useEffect(()=>{
       
        
       api.get("/api/categorias")
       .then((response)=> setCategories(response.data.response))
       .catch((err)=>{
        console.error('ops ocorreu um erro', JSON.stringify(err))
       })
    },[])
  
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        filterCategorias()
     
        
    },[categories])

    useEffect(()=>{  

       
        
    
        if(productSelected && productSelected.length===0){
            
            setProdutsExib(products)
           
        }

       
        productSelected && productSelected.length>0 ? setProdutsExib(productSelected): setProdutsExib(products)
        filterCategorias()
    },[productSelected, produtsExib])






    
  
    function openModal(param){
        const item =  filterQtd(param)
        setIsOpen(true)
       
        setDate(param)
        if(item.length>0){
          
            setQtd(item[0].qtd)
            setSelf(item[0].self)
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
        setSelf(false)
    }
    function addQtd(){
        setQtd(qtd+1)
    }
    function removeQtd(){
        if(qtd>=1){
            setQtd(qtd-1)
        }
        
    }
    function filterQtd(item){
       const result = cart.filter((element)=> element.id===item.id )
      
       return result
    }
 
   
    function addCart(itemCart){



        const item = {...itemCart, qtd: qtd, self: self, marker:false, date: moment()}
         
        const id = item.id
        
        if(item.self===true){
          
            if(cart.length<=0){
              
                item.title = item.title +' 1/2 pizza'
                item.qtd = 1
                
            }
            else{
                const filter =cart.filter((el)=>  el.self===true && el.marker===false)
               
                if(item.self===true && filter.length===1){
                   
                    let valorMax = Math.max(item.price, filter[0].price)
                    item.marker = true;
                    filter[0].marker = true;
                    item.marker = true;
                    filter[0].price = valorMax/2
                    item.qtd=1;
                    item.price = valorMax/2
                    item.title = item.title + ' 1/2 pizza'
                    dispatch(setCart(item, filter[0]))
                    setContentModal(2)
                    return
                }
                else{
                    item.title = item.title +' 1/2 pizza'
                    item.qtd = 1
                   
                }
                
                }       
          
              
        }                
       
    
        //buscar cart e verificar o id 
        if(cart.length>0 && item.self===false){
           
            const search = cart.filter(item => item.id ===id)
            
             
          
            search.length >0 ? dispatch(setCarts(sumQtd(item))) : dispatch(setCart(item))
        }
        else{
            dispatch(setCart(item))
        }    
       
        
     // pegar os dados , se os dados forem desta hora , eu adiciono se não eu substituo


        
     /*    const localItem = JSON.parse(localStorage.getItem('Cart'))
        
        if(localItem){
            const timeNow = moment().format('HH');
            const timeRegister= moment(localItem.date).format('HH')
       
            const itens = (timeNow - timeRegister)>2 ? sumQtd(item) : item
            
            localStorage.setItem('Cart', JSON.stringify(itens))
        }
        else{
            localStorage.setItem('Cart', JSON.stringify(item))
        } */
        
        setContentModal(2)
     
     
    
    }
    function sumQtd(item){
        
        const id = item.id
              /*  item.qtd = parseInt(item.qtd) + qtd */
        item.qtd =  qtd
       
     
        return item
        
        
     

    }
    function filterCategorias(){
       
     
        let categoriesIs = []

       for(let i=0; i< produtsExib.length; i++){
          for(let j=0; j< categories.length; j++){
         
            if(categories[j].id===parseInt(produtsExib[i].id_categoria)){
             
                categoriesIs.push(categories[j])
            }
          }
       
       
       }
       setCategorie( [...new Set(categoriesIs)])
        return categorie
    }

    function markSelf(){
        
      
         setSelf(!self)
         
    }

    
   
    return(
       
   <>  <Container>

 


   <Modal 
    open={modalIsOpen} 
    openModal={openModal}
    closeModal={closeModal}
    date={date}
    content={contentModal}
    qtd={qtd} 
    addCart={()=>addCart(date)}
    onClickMinus={()=>removeQtd()}  onClickPlus={()=>addQtd()}
    onClickSelf={()=> markSelf()}
    self ={self}

    
    continue={closeModal}
    />
   {categorie.map((categoria)=>(<>

  
    <TitleCategoria >{categoria.title}</TitleCategoria>
    <ContainerCards key={categoria.id +50}>
    {        produtsExib.map( (element)=> (
            <>
            
            {parseInt(element.id_categoria) ===categoria.id ?  <CardsFood key={element.id} 
            img={element.img} title={element.title} price={element.price}  
             plus={()=>openModal(element)} /> :null }
          
           </>
       ))
    }
    </ContainerCards>
    
    </>
   ))}

   </Container>
   </>
        
    )
}
export default ContainerCardsComp;