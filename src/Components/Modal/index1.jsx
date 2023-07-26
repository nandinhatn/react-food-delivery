import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'

import { 
    ContainerModal,
    Image,
     Button,
      ContainerButton,
       Title,
        ContainerButtons,
         ButtonPlus,
          ButtonMinus,
           QtdTxt,
        ContainerDetails,
        ContainerDetailsText,
        ButtonCheckout,
        ContainerShop,
        ButtonShop,
        Sucess
    } from "./styles";


Modal.setAppElement('#root');






const WindowModal  = (props)=>{

     const qtd = props.qtd;

     
 
   const content = (param) =>{
     console.log('###########', param)
    if(param===1){
      return (<>  <Title>{props.date.title}</Title>
      <Image src={props.date.img}/>
      <ContainerButtons>    
      <ButtonMinus disabled={props.qtd<=0? true : false}  onClick={props.onClickMinus}>-</ButtonMinus> <QtdTxt>{props.qtd}</QtdTxt><ButtonPlus onClick={props.onClickPlus}>+</ButtonPlus></ContainerButtons>
      
      
      
      <ContainerDetails>
      <ContainerDetailsText>Detalhes</ContainerDetailsText>
      
      <div>{props.date.details}</div>
      
      </ContainerDetails>
      
      <ButtonCheckout disabled={props.qtd<=0? true : false}  onClick={props.addCart} >Colocar no carrinho</ButtonCheckout></>)
    }
    else if(param===2){
        return(<>
         <Sucess>Adicionado com sucesso!!!!</Sucess>
    <ContainerShop>

   
    <ButtonShop onClick={props.continue}>Continuar comprando</ButtonShop>
    
    <NavLink  to={'/carrinho'} onClick={props.closeModal}><ButtonShop >Ir para Carrinho</ButtonShop></NavLink>
    </ContainerShop>
        </>)

    }
    else if(param===3){

        return(<div>Fora de Abrangência</div>)
    }
    else if(param===4){

        return(<div>Fora do horario</div>)
    }


    
   }



   
    return(
       
         
            <Modal isOpen={props.open} onRequestClose={props.closeModal}   
            
            style={{content:{
              
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                margin: 'auto',
                width:'350px',
                height:  props.content ? '500px' : '200px',
               
                boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                borderRadius: '10px 20px 0px  0px',
                padding:0,
                
               
               
            }}}>
                <ContainerButton>
                <Button onClick={props.closeModal}>X</Button></ContainerButton>
<ContainerModal>
<Title>{props.date.title}</Title>
      <Image src={props.date.img}/>
      <ContainerButtons>    
      <ButtonMinus disabled={props.qtd<=0? true : false}  onClick={props.onClickMinus}>-</ButtonMinus> <QtdTxt>{props.qtd}</QtdTxt><ButtonPlus onClick={props.onClickPlus}>+</ButtonPlus></ContainerButtons>
      
      
      
      <ContainerDetails>
      <ContainerDetailsText>Detalhes</ContainerDetailsText>
      
      <div>{props.date.details}</div>
      
      </ContainerDetails>
      
      <ButtonCheckout disabled={props.qtd<=0? true : false}  onClick={props.addCart} >Colocar no carrinho</ButtonCheckout>
    

</ContainerModal>

            </Modal>
        
    )
} 

export default WindowModal;