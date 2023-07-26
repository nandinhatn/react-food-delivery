import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import styled from "styled-components";

import { faSearch, faHome, faUserCircle, faCartShopping, faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const NavContainer= styled.div`


display: flex;
flex-wrap: wrap;
gap: 20px;
padding: 10px 0px 10px 0;
justify-content: center;
align-items: center;

/* position:sticky; */
top:0;
background-color: white;
z-index: ${window.location.pathname=='/carrinho'? 99999 : 1} /* eslint-disable-line */


/* border-bottom: 1px solid #ccc; */

`;

export const Text = styled.div`
font-family: ${(prop)=> prop.theme.fonts.regular};
font-size: 12px;
text-decoration: none;
font-weight: bold;
&:link{
    text-decoration: none;
}

`;




export const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

export const CartContainer = styled.div`
padding: 10px;
border-radius: 16px;
width: 100px;
background-color: ${(prop)=> prop.theme.colors.primary};
color: white;
display: flex;
font-size: 12px;
justify-content: space-around;
align-items: center;
text-decoration: none;
`;

export const Input = styled.input`
border:  1px solid #3F4246;
outline : 1px solid #CCCC;
border-radius: 16px;
padding: 5px;
font-size: 12px;
padding-left: 30px;
font-family: ${(prop)=> prop.theme.fonts.regular};


`;


export const FormField = styled.div`
position: relative;
display: inline-block;
`;
export const Icon = styled.span`
position: absolute;
left: 10px;
top: 2px;
`;