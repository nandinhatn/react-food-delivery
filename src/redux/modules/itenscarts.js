import moment from "moment";
import dates from "../../dates";
/* import categories from "../../dates/categorias"; */
import axios from "axios";
import api from "../../dates/api"





export const Types ={
    SET_CART : 'cart/SET_CART',
    SET_CARTS: 'carts/SET_CART',
    SET_LOCATION: 'location/SET_LOCATION',
    SET_PRODUCT: 'product/SET_PRODUCT',
    SET_PRODUCTS: 'products/SET_PRODUCTS',
    SET_CATEGORIES: 'products/SET_CATEGORIES',
    SET_CATEGORIE: 'products/SET_CATEGORIE',
    CLEAR_CART :'carts_clear/CLEAR_CART'
    // FAZER AQUI - O  SET DE TODOS OS PRODUTOS
}

const localItem = JSON.parse(localStorage.getItem('Cart'))

if(localItem){
    const timeNow = moment().format('mm');
   
    const timeRegister= moment(localItem.date).format('mm')
   
    const diference = timeNow -timeRegister
        diference>2 ? localStorage.removeItem('Cart') : localItem /* eslint-disable-line */
}
 const initial = localItem? [localItem]: []
   
//try catch estudar o trycatch
   
//estudar o async await 

/*   api.get("/api/produtos")
 .then((response)=> initialState.products=response.data.response)
 .catch((err)=>{
  console.error('ops ocorreu um erro', JSON.stringify(err))
 })
    */



 
    
  /* getData().then(res=> categories.push(res.data.response)) */
 

  const apis = fetch("http://189.126.111.155:21222/api/produtos")
  .then((response) => response.json())
  .then((response) => {
    produtos.push(...response.response)
   /*  initialState.categorieSelected= response.response */
     
  });
  const apis1 = fetch("http://189.126.111.155:21222/api/categorias")
  .then((response) => response.json())
  .then((response) => {
    categorias.push(...response.response)
    selectOnlyExistCategorie()
  /*   initialState.categorieSelected= response.response */
    
  });
const produtos =[]
const categorias =[]
/* function teste (apis){
    return new Promisse(resolve =>{
        console.log(typeof resolve)
        console.log('te')
    })
}
console.log(teste()) */

const initialState ={
    carts:[],
    cartSelected : null,
    location: [],
    products: produtos,
    productSelected:null,
    categories : categorias,
    categorieSelected: null,
    isSuccess : false,
    
   

};


function selectOnlyExistCategorie(){
     
      /*  getData().then(res => categories.push(...res.data.response)) */
      /*  getProdutos().then(res=> produtos.push(...res.data.response))  */
    let categoriesIs = []
/*    console.log(initialState.products.length) */
   const produtos = initialState.products
   const categories = initialState.categories
  
    for(let i=0; i< produtos.length; i++){
       for(let j=0; j< categories.length; j++){
       /*   console.log(categories[i].id) */
         if(parseInt(categories[j].id)===parseInt(produtos[i].id_categoria)){
           
             categoriesIs.push(categories[j])
             initialState.categorieSelected=[...new Set(categoriesIs)]
             
           
         }
       }
    
    
    }
   
    return  [...new Set(categoriesIs)]
     
  
}
/*  getData().then(selectOnlyExistCategorie()) */


export default function reduce(state=initialState, action){
    switch(action.type){
        case Types.SET_CART:
           
            return {...state,
                carts:[...state.carts,action.payload ]  }

        
            case Types.CLEAR_CART:
               
                const filters_clear = state.carts.filter((element)=> element.id !== action.payload.id)
            return {...state,
                carts:[ ...filters_clear]  }

        case Types.SET_CARTS:      
          
         const filters = state.carts.filter((element)=> element.id !== action.payload.id)
       
          return {...state,
            carts:[action.payload, ...filters]  }
        case Types.SET_LOCATION:
                
            return {...state,
                    location:[action.payload,...state.location]
                }

        case Types.SET_PRODUCTS:   
                           
                 return {...state,
                   carts:[...state.products, action.payload]  }
        case Types.SET_PRODUCT:    
                    let result=''
                   
                    
                    if(action.payload ===null){
                       
                        result = ''
                    }
                    else{
                        result = state.products.filter((element)=> element.title.toLowerCase().includes(action.payload.toLowerCase()) || element.details.toLowerCase().includes(action.payload.toLowerCase()))
                    }       
               
                   /*  const teste = state.carts.filter((element)=> element.id != action.payload.id) */
                     return {...state,
                    productSelected:result  }
                
                    case Types.SET_CATEGORIES:   
                    state.productSelected = null
                    return {...state,
                      products:[...state.products]  }

                      case Types.SET_CATEGORIE:   
                      let filter = state.categories.filter((element)=> element.id===action.payload)
                      let selectProducts = state.products.filter((element)=> element.id_categoria ===filter[0].id)   
                 
                         
                      return {...state,
                        productSelected: selectProducts }
        
        default: 
            return state;
        
        
    }
}

export function setCarts(carts){
    return{
        type: Types.SET_CARTS,
        payload: carts
    }
}

export function setCart(cart){
    return {
        type: Types.SET_CART,
        payload: cart
    }
}
export function clearCart(carts_clear){
    return {
        type : Types.CLEAR_CART,
        payload: carts_clear
    }
}
export function setLocations(location){
    return {
        type: Types.SET_LOCATION,
        payload:location
    }
}
export function setProducts(products){
    return {
        type: Types.SET_PRODUCTS,
        payload: products
    }
}
export function setProduct(product){
    return {
        type: Types.SET_PRODUCT,
        payload: product
    }
}
export function setCategories(categories){
    return {
        type: Types.SET_CATEGORIES,
        payload: categories
    }
}
export function setCategorie(categorieSelected){
    return{
        type: Types.SET_CATEGORIE,
        payload: categorieSelected
    }
}