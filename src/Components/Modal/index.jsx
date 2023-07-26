import React, {useState, useEffect} from "react";
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
        Sucess,
        ContainerInput,
        Input,
        OptionSelfText
    } from "./styles";


Modal.setAppElement('#root');






const WindowModal  = (props)=>{
  

     function checkButton(){
        if(props.qtd>0){
          
            return false
        }
        if(props.self){
          
            return false
        }
        else{
            return true
        }
     }

     
   
    const content = props.content
    return(

        <>
        {props.content===1 ? 
         <Modal isOpen={props.open} onRequestClose={props.closeModal}   
            
         style={{content:{
           
             left: '0',
             right: '0',
             top: '0',
             bottom: '0',
             margin: 'auto',
             width:'350px',
             height:  '500px' ,
             zIndex:'90000000',
            
             boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
             borderRadius: '10px 20px 0px  0px',
             padding:0,
             
            
            
         }}}>
            <ContainerButton>
             <Button onClick={props.closeModal}>X</Button></ContainerButton>
<ContainerModal>
<Title>{props.date.title}</Title>
   <Image src={props.date.img}/>
   {props.date.allowSelf ? <>
   {!props.self? <OptionSelfText>Este produto tem opção de meia , deseja {props.self} ?</OptionSelfText>: null }
   
   <ContainerInput>
   <Input value={props.self} defaultChecked={props.self} onChange={props.onClickSelf} type="checkbox"/> Meia Pizza
   </ContainerInput>
   
    </> : null }
   
    
   <ContainerButtons> 
    {!props.self ? <> <ButtonMinus disabled={props.qtd<=0  ? true : false}  onClick={props.onClickMinus}>-</ButtonMinus> <QtdTxt>{props.qtd}</QtdTxt><ButtonPlus onClick={props.onClickPlus}>+</ButtonPlus></> : null }
  </ContainerButtons>
   
   
   
   <ContainerDetails>
   <ContainerDetailsText>Detalhes</ContainerDetailsText>
   
   <div>{props.date.details}</div>
   
   </ContainerDetails>
   
   <ButtonCheckout disabled={checkButton()}  onClick={props.addCart} >Colocar no carrinho</ButtonCheckout>
 

</ContainerModal>
         </Modal>
        
        
        : props.content===2 ? <Modal isOpen={props.open} onRequestClose={props.closeModal}   
            
        style={{content:{
          
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            margin: 'auto',
            width:'350px',
            height:   '200px',
           
            boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            borderRadius: '10px 20px 0px  0px',
            padding:0,
            
           
           
        }}}>
            <ContainerButton>
             <Button onClick={props.closeModal}>X</Button></ContainerButton>
<ContainerModal>
            <Sucess>Adicionado com sucesso!!!!</Sucess>
        <ContainerShop>
    
       
        <ButtonShop onClick={props.continue}>Continuar comprando</ButtonShop>
        
        <NavLink  to={'/carrinho'} onClick={props.closeModal}><ButtonShop >Ir para Carrinho</ButtonShop></NavLink>
        </ContainerShop>
        </ContainerModal>
        
        
        </Modal>: props.content===3 ?  <Modal isOpen={props.open} onRequestClose={props.closeModal}   
            
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
                
               
               
            }}}>  <ContainerButton>
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
  
  <ButtonCheckout disabled={checkButton()} onClick={props.addCart} >Colocar no carrinho</ButtonCheckout>


</ContainerModal>
        </Modal>  : props.content===4 ? <Modal isOpen={props.open} onRequestClose={props.closeModal}   
            
            style={{content:{
              
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                margin: 'auto',
                width:'350px',
                height:  '200px',
               
                boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                borderRadius: '10px 20px 0px  0px',
                padding:0,
                
               
               
            }}}> <ContainerButton>
            <Button onClick={props.closeModal}>X</Button></ContainerButton>
<ContainerModal>
       
       <ContainerShop>
   
      
     <div>Fora do campo de entrega</div>
       </ContainerShop>
       </ContainerModal>
       
       
       </Modal>: props.content==5 ? <Modal isOpen={props.open} onRequestClose={props.closeModal}   
            
            style={{content:{
              
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                margin: 'auto',
                width:'350px',
                height: '200px',
               
                boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                borderRadius: '10px 20px 0px  0px',
                padding:0,
                
               
               
            }}}> <ContainerButton>
            <Button onClick={props.closeModal}>X</Button></ContainerButton>
<ContainerModal>
       
       <ContainerShop>
   
      
     <div>Fora do Horário</div>
       </ContainerShop>
       </ContainerModal>
       
       
       </Modal> : null}
   
           
            </>
    )
} 

export default WindowModal;