import React, {useState, useEffect} from "react";
import {GoogleApiWrapper, Map, Marker} from 'google-map-react'
import { useDispatch, useSelector } from "react-redux";
import Geocode from "react-geocode";
import { setCart, setCarts, setLocations } from '../../redux/modules/itenscarts';
import { ContainerMap, Input, ContainerInput , Container, Button, TextConfirm, TitleConfirm} from "./style";
import {getDistance} from 'geolib'
import infos from "../../dates/info";

import { withMask } from 'use-mask-input';




 const MapContainer = (props)=>{

 
  
  const dispatch = useDispatch()


  const [distance, setDistance]= useState(0)
  const [location, setLocation]= useState('')
  const [confirmLocation, setConfirmLocation]= useState('')
  const [coords, setCoords] = useState([])
  const [street, setStreet] = useState('')
  const [bairro, setBairro]= useState('')
  const [city, setCity]= useState('')
  const [state, setState] =useState('')
  const [frete,setFrete] = useState([])
  const [numero, setNumero]= useState('')
  const [complemento, setComplemento]= useState('')
  const [out,setOut] = useState(true)
  const [name, setName] = useState('')
  const [telefone, setTelefone]= useState('')
  const [cpf,setCpf] = useState('')
  const [mask, setMask]= useState('')
 
  const locationDispacth = useSelector((state)=> state.itenscarts.location)
  function getPosition(){
    console.log('*************************************************aqui')
    Geocode.setApiKey("");
    Geocode.setLanguage("pt");
    Geocode.setRegion("br");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
   
    
   


  

    Geocode.fromAddress([location]).then(
        (response) => {
          
          const { lat, lng } = response.results[0].geometry.location;
          const resposta =[lat,lng]
      
        /*   console.log(lat, lng); */
          setCoords(resposta)
         
          
          confirmAdress(lat,lng)
          
          
          
        },
        (error) => {
          console.error(error);
        }
      );
   }
    function confirmAdress(lat, lng){
      Geocode.fromLatLng(lat, lng).then(
        (response) => {
          const address = response.results[0].formatted_address;

          const addressFormat = `${response.results[0].address_components[1].long_name}, 
          ${response.results[0].address_components[3].long_name},
          ${response.results[0].address_components[2].long_name},
          ${response.results[0].address_components[4].long_name}
                                `
         
                               
       
          setConfirmLocation(addressFormat)
          setStreet(response.results[0].address_components[1].long_name)
          setBairro(response.results[0].address_components[2].long_name)
          setCity(response.results[0].address_components[3].long_name)
          setState(response.results[0].address_components[4].long_name)
          
         
        },
        (error) => {
          console.error(error);
        }
      );
    }
   
  useEffect(()=>{
 
    getPosition()
  },[location])
  

  useEffect(()=>{
    
  },[out])

/*   useEffect(()=>{
    console.log('aquiiiiiiiii')
    dispatch(setLocations([frete]))
    console.log('frete location',locationDispacth)
  },[frete]) */


 
   function saveAddres(){
    
    sucess()
    let info = `Rua : ${street}, \n n: ${numero},\n Bairro ${bairro}, \n Cidade: ${city}, \n Nome: ${name}, \n Telefone: ${telefone}, 
     \n CPF: ${cpf} \n  `
    props.address(info)
    
   
   }
   function sucess(){
    /*  const crd = pos.coords; */
 
  /*  console.log("Your current position is:");
   console.log(`Latitude : ${coords[0]}`);
   console.log(`Longitude: ${coords[1]}`); */
 /*   console.log(`More or less ${crd.accuracy} meters.`); */
 
 
   const distance = getDistance(
         
     { latitude: coords[0], longitude: coords[1] },
 
  
     { latitude: infos.latitude, longitude: infos.longitude }
 );

     calcFrete(distance)
 setDistance(distance)
 
 }
 function calcFrete(distance){

  const km = distance/1000;
  let freteCalc;
  
  // fazer uma função aqui 
  // usando o arrayfilter com função a parte
  let arrayDistancias = [];
  infos.faixas.forEach((item)=>{
    arrayDistancias.push(item.distance)
  })
  
  let maxFrete = Math.max(...arrayDistancias)
  let valorFrete;
  if(km > maxFrete){
   
    /* alert("fora do campo de entrega") */
    
     props.out()
    setOut(false)
    return

  }else{
    valorFrete=findClosest(km)
   
  }
 
         setFrete(valorFrete)
        
         dispatch(setLocations([valorFrete]))
        
  
  return freteCalc
  
}

function findClosest(km) {
  return infos.faixas.reduce((best, current) => {
      return (current.distance >= km && (!best || current.distance < best.distance))
          ? current
          : best;
  }, undefined);
}
return(<>

<Container >
<ContainerMap>

<TitleConfirm> Informações de Endereço</TitleConfirm>

    <Input value={location} placeholder="Digite o seu endereço" onChange={(e)=>setLocation(e.target.value)}/>
    <div>
    <Input name='number' placeholder="Número" value ={numero} onChange={(e)=>setNumero(e.target.value)}/>
<Input name='complement' placeholder="Complemento" value ={complemento} onChange={(e)=>setComplemento(e.target.value)}/></div>
  {/*   <div>{confirmLocation}</div> */}
    


    <TitleConfirm> Dados pessoais</TitleConfirm>
    <Input placeholder="Digite seu nome" value={name} onChange={(e)=> setName(e.target.value)}/>
    <Input ref={withMask('(99)99999-9999')} placeholder="Digite seu telefone" onChange={(e)=> setTelefone(e.target.value)}/>
    <Input ref={withMask('999.999.999-99')} placeholder="Digite seu CPF" onChange={(e)=> {setCpf(e.target.value);}}/>

  
</ContainerMap>

<ContainerInput>
 
  <TitleConfirm> Confirmação de Endereço</TitleConfirm>
  <TextConfirm> Confirme se seu endereço está correto</TextConfirm>


    <Input  name='street' placeholder="Rua/Av" value={street} />
    <div>
  
    <Input name='bairro' placeholder="Bairro" value ={bairro}/></div>
   
    <Input name='city' placeholder="Cidade" value ={city}/>
   
    <Input name='state' placeholder="Estado" value ={state}/>
    <Input name='number' placeholder="Número " value ={numero} />
<Input name='complement' placeholder="Complemento" value ={complemento} />

      {confirmLocation && numero ? <Button coords={coords}   onClick={()=> saveAddres()}>Confirmar Endereço</Button> :null }
    
   
    
    </ContainerInput>


    </Container>
</>)
}
export default MapContainer


