import axios from "axios";
import api from "./api";


/* api.get("/api/categorias")
.then((response)=> categories.push(...response.data.response))
.catch((err)=>{
 console.error('ops ocorreu um erro', JSON.stringify(err))
})  */


 const getData = async () => {
	const response = await api.get(
		"/api/categorias"
        
	);
    return response
    }
    
  getData().then(res=> categories.push(...res.data.response))
 
const categories =[


    
    


];


export default categories