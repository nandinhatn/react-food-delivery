import { useDispatch, useSelector } from "react-redux";
const cart= useSelector((state)=> state.itenscarts.carts)
export const openModal= (param)=>{

    const item =  filterQtd(param)
    setIsOpen(true)
    console.log("*********", param)
    setDate(param)
    if(item.length>0){
        console.log(item)
        setQtd(item[0].qtd)
    }
    
    setContentModal(1)
  
    document.getElementById('section-1').scrollIntoView()
 
  
    document.body.style.overflow = 'hidden'
}


export const closeModal =()=>{

    setIsOpen(false)      
    document.body.style.overflow = 'auto'
    setContentModal(statusModal[0].status)
    setQtd(0) 
}

export const addQtd = ()=>{

    setQtd(qtd+1)
}
export const removeQtd = ()=>{

    if(qtd>=1){
        setQtd(qtd-1)
    }
    
}
export const filterQtd = (item)=>{

   const result = cart.filter((element)=> element.id===item.id )
   console.log('result',result)
   return result
}

