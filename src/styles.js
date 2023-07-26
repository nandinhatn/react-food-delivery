import styled from "styled-components";
import Background from './assets/img/pizza-4968645_1280.jpg'


export const Container = styled.div`
background-image: url(${Background});
background-repeat: no-repeat;
min-height: 100vh;

position:static;
margin: 0;
/* background-color: #0A0A0A; */
background-size: cover;
background-position: 0 0;
background-attachment: fixed;


  
 

`;





export const ContainerCards= styled.div`
display:flex;

justify-content: space-evenly;


flex-wrap: wrap;
`;

export const Wrapper= styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;

`;
export const Title = styled.h1`
font-size: 18px;
font-family: ${(prop)=> prop.theme.fonts.regular};
color: ${(prop)=> prop.theme.colors.secondary};
text-align: left;
margin-left:5px;

`;
export const Footer= styled.div`
background-color: ${(prop)=> prop.theme.colors.primary};
display: flex;
justify-content: center;
align-items: center;
color: white;
width: 50%;
text-align: center;
margin-left: 5px;

`;
export const ContainerTotal = styled.div`
margin: 0;
margin-top: 20px;
justify-content: center;
height: 100%;
/* width site  */
width: 80vw;

margin-bottom: 0;

;

align-items:center;

text-align: center;
border-radius: 10px;
background-color: white;

/* background-image: linear-gradient(to left top, #f2f2f2, #ededed, #e7e8e8, #e2e3e3, #dddedd); */
/* margin-bottom: 50px; */


`;

