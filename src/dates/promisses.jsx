/* import api from "./api";
const getData = async () => {
	const response = await api.get(
		"/api/categorias"
        
	);
    return response
    }

 
    const getProdutos = async ()=>{
        const response = await api.get("/api/produtos/")
        return response
    }
 
 
    export const apis =Promise.all([getData(), getProdutos()]).then(function (results){
        const act = results[0].status
        const acc = results[1].status
        console.log('acc',act), acc
        if(act===200 && acc===200){
          
           
           return results
           /*  initialState.categories = results[0].data.response
            
            initialState.products= results[1].data.response */
           /*  console.log(initialState) */
           /*  selectOnlyExistCategorie()  */
            /* console.log(selectOnlyExistCategorie())
            selectOnlyExistCategorie() */
   /*      } */
  /*   }) */ 

   export  const apis = fetch("http://189.126.111.155:21222/api/categorias")
    .then((response) => response.json())
    .then((user) => {
       console.log(user)
    });