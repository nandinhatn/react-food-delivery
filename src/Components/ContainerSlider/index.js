import React,{useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategorie, setCategories } from '../../redux/modules/itenscarts';
import IconSlider from '../IconSlider';
import Imagem1 from '../../assets/img/Pizza-Pizzaria-Forno-Forza-Express.jpg'
import Imagem2 from '../../assets/img/sabores-de-pizza-mais-pedidos.jpg'
import Imagem3 from '../../assets/img/download.jpg';
import { Carousel,  ContainerSliderStyle} from './styles';
import categories from '../../dates/categorias'
import api from "../../dates/api";

const  ContainerSlider=()=>{

    const [windowSize, setWindowSize]  = useState(null);
   
    
    const categories =  useSelector((state)=> state.itenscarts.categories)
    const products = useSelector((state)=> state.itenscarts.products)
    const [categorias, setCategorias]= useState([])
    const [produtos, setProdutos]= useState([])
    const [numberSlider, setNumberSlider]= useState(3)
   
    const categorieSelected = useSelector((state)=> state.itenscarts.categorieSelected)
    const [exibCategories, setExibCategories] = useState()
    const [filtedCategories, setFilteredCategories]= useState()
    const dispatch = useDispatch()


  
/*     api.get("/api/categorias")
.then((response)=> categorias.push(...response.data.response))
.catch((err)=>{
 console.error('ops ocorreu um erro', JSON.stringify(err))
})
console.log(categorias)
    */

/* const getData = async () => {
	const response = await api.get(
		"/api/categorias"
        
	);
    return response
    }
    
  getData().then(res=> setExibCategories(res.data.response)) */

useEffect(()=>{
    
    

   async function saveCategories(){
    const response =    await fetch('http://189.126.111.155:21222/api/categorias')
    const data = await response.json()
  
   
    saveDatasCategorias(data)
   /*  .then(res=> res.json()).then(data => data.response).then(res=> setCategorias(res)) */
   /*  saveProdutos() */
    }
    saveCategories()
    
    function saveDatasCategorias(data){
        setCategorias(data.response)
       
    }

   async function saveProdutos(){
        const response = await fetch('http://189.126.111.155:21222/api/produtos')
        const data = await response.json()
    
        
        saveDatasProdutos(data)
    }
    saveProdutos()

    function saveDatasProdutos(data){
        setProdutos(data.response)
    }

   /*  async function saveProdutos(){
        await fetch('http://poppymidia.kinghost.net:21114/api/produtos')
        .then(res=> res.json()).then(data=>setProdutos(data.response))
        

    }
  
    
    function selectCategorias(){
        console.log(produtos.length,categorias.length)
    } */
   
    function handleResize(){
        setWindowSize(window.innerWidth)
      
     
       
        

    }

    window.addEventListener('resize', handleResize)

    handleResize();
    return() => window.removeEventListener('resize', handleResize)
},[])

useEffect(()=>{
    
    fnSelecCategorias()
},[produtos])

function fnSelecCategorias(){
     const categoriesIs =[]
     for(let i=0; i< categorias.length; i++){
      
        for(let j=0; j< produtos.length; j++){
          
            if(categorias[i].id===produtos[j].id_categoria){
                
                categoriesIs.push(categorias[i])
            }
        }
     }
     
     let result = [...new Set(categoriesIs)]
    
     
     setFilteredCategories(result)
   

       parseInt(windowSize/120) > result.length ?setNumberSlider(parseInt(result.length)) : setNumberSlider(parseInt(windowSize/120) )
/*      setNumberSlider(result.length) */
     setExibCategories(result)
   
     return result
}

useEffect(()=>{
  
    
},[produtos])



//calcular pelo numero de categorias , é o numero de categorias inferior ao número de slides que está duplicando
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,

    slidesToShow:  numberSlider,
    slidesToScroll: numberSlider ,
    autoplay:true,
  };
  function filterCategories(id){
    if(id !='all'){

          let filter = categorias.filter((el)=> el.id ===id)
         
  setFilteredCategories(filter)
    
    dispatch(setCategorie(id))
    setExibCategories(categorieSelected)
    setNumberSlider(2)


} else{
    console.log('dentro else all')
    setFilteredCategories([])
    setNumberSlider(parseInt(window.innerWidth/120))
   
    dispatch(setCategories(exibCategories))
    setExibCategories(exibCategories)
    fnSelecCategorias()
    
}

  }
  return(
    <ContainerSliderStyle>
    
  <Carousel  {...settings}>
  
  <IconSlider  key='90' /* img={Imagem1} */ title='Todos' click={()=>filterCategories('all')}/>




{filtedCategories ? filtedCategories.map((el)=>

<IconSlider  key={el.id} /* img={Imagem1} */ title={el.title} click={()=>filterCategories(el.id)}/>

   ) : null}
 


 
  


  </Carousel>

  </ContainerSliderStyle>
  )
}

export default ContainerSlider;
  