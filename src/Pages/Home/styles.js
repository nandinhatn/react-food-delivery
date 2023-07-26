import styled from "styled-components";

export const Container = styled.div`
margin: 0;
margin-top: 20px;
justify-content: center;
height: 100%;

margin-bottom: 0;

width: 100%;

align-items:center;

text-align: center;
border-radius: 10px;
background-color: white;

/* background-image: linear-gradient(to left top, #f2f2f2, #ededed, #e7e8e8, #e2e3e3, #dddedd); */
/* margin-bottom: 50px; */


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

