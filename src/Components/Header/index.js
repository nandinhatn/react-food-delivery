import react from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {Container,ImageLogo} from './styles';
import Logo from '../../assets/img/logo_pizza.jpg'
import Slider from 'react-slick'


import CardsFood from '../CardsFood';
import { NavLink } from 'react-router-dom';
const Header =()=>{

 
return(
<>
     <Container /* tamanho={windowSize} */>
<NavLink to={"/pizzaria"}><ImageLogo src={Logo}/></NavLink>

</Container>
       
 
    
      </>
    


   
      

)
}
export default Header;




