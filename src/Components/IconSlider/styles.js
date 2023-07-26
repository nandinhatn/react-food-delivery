import styled from "styled-components";


export const Title = styled.div`
/* color: ${(props)=> props.theme.colors.primary}; */
color: white;
font-family: ${(props)=> props.theme.fonts.regular};
margin-top: 10px;
font-size: 12px;
cursor: pointer;
:hover{
    opacity: 0.9;
}
/* font-weight: bold; */
`;
export const Container = styled.div`
background-color: ${(prop)=> prop.theme.colors.primary};
justify-content: center;
align-items: center;
width: 100%;
`;



