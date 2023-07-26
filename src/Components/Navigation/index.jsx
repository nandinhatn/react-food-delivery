import react, {useRef, useEffect,useState} from 'react'

import { Nav, NavItem} from 'reactstrap';
import { Form, NavLink , useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle, faCartShopping, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NavContainer, Text , Image, CartContainer, Input, FormField, Icon } from './styles';


import { useDispatch,useSelector } from 'react-redux';
import { setProduct, setProducts } from '../../redux/modules/itenscarts';
import theme from '../../theme';
import Logo from '../../assets/img/logo_pizza.jpg';
import { type } from '@testing-library/user-event/dist/type';
import moment from 'moment';
import ContainerSlider from '../ContainerSlider';


const tabs = [{
    route: "/carrinho",
    icon: faCartPlus,
    label: "Carrinho"
  }]

  
const Navigation = (props)=>{

  const location = useLocation();

  
  const cart= useSelector((state)=> state.itenscarts.carts)
  const products = useSelector((state)=> state.itenscarts.products)
  const dispatch = useDispatch()

  const [pos, setPos]= useState()
  const myref = useRef('')
  
  const localItems = JSON.parse(localStorage.getItem('Cart'))
  const [itemsCart, setItemsCart]= useState('')
  const [search, setSearch] = useState('')

 /*  if(localItems){
    const localItem = JSON.parse(localStorage.getItem('Cart'))
    const timeNow = moment().format('HH');
    const timeRegister= moment(localItem.date).format('HH')
    const itens = timeNow - timeRegister>2 ? [] : localItem   
    setItemsCart(itens)   
  }
  
 */

  

  function countItems(){

        

 
        let conta;
        let filter;
 
      
       if(cart.length>0){  
         filter = cart.filter((element)=> element.self===true)
      
        
        conta= cart.reduce(function (soma, atual){
          return soma + atual.qtd
        },0)
        conta = conta 
        
       }
      
  /*   console.log('countItems',itemsCart) */
   /*  const conta= cart.reduce(function (soma, atual){
      return soma + atual.qtd
    },0) */
   
   return conta ;
  }

  

function getPosition(){
  const x = myref.current.getBoundingClientRect().y
  setPos(x)
  
}


/*  useEffect(()=>{
 

  const localItem = JSON.parse(localStorage.getItem('Cart'))
  const timeNow = moment().format('HH');
  const timeRegister= moment(localItem.date).format('HH')
  const itens = timeNow - timeRegister>2 ? [] : localItem      


  setItemsCart(localItem)
 },[itemsCart]) */
  useEffect(()=>{
   getPosition()
  
  },[])
 useEffect(()=>{
  window.addEventListener('scroll', getPosition)
 },[])

 useEffect(()=>{
  filterProduct()
 },[search])


  const mystyle = {
    color: theme.colors.primary,
   
    padding: "10px",
    fontFamily: theme.fonts.regular
    
  };

  function filterProduct(){
   
    if(search.length>=3){
     
      dispatch(setProduct(search))
    }
    if(search.length<=0 || search=='' || search==='' || search== null){
      dispatch(setProduct(null))
    }
    

  }
  
    return(
     
     <>
       
      <NavContainer  id="section-1" ref={myref}>  
    

      {pos <=0 ?  <NavLink to={"/pizzaria"} ><Image  src={Logo}/></NavLink>  :'' }


   
{/*   <FontAwesomeIcon  transform="down-2 left-2"  size="lg"  icon={link.icon}/> */}
  {countItems() ?   <NavLink to={"/carrinho"}><CartContainer>



  <FontAwesomeIcon  transform="down-2 left-2"  size="lg" color='white' icon={faCartPlus}/>
 


  <Text> {countItems()} </Text></CartContainer> </NavLink>:'' }

    {/* <Text>{link.label}</Text> */}
  
    {location.pathname !='/carrinho' ? <FormField>
 

 <Input value={search} onChange={(e)=> setSearch(e.target.value)} />
<Icon>
<FontAwesomeIcon icon={faSearch}  />
</Icon>

</FormField>: null}


    </NavContainer>

</>
    )
}
export default Navigation


