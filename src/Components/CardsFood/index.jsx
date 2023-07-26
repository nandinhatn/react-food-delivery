import React from "react";
import {CardContainer, CardPhoto, Title, Price,Plus, Container} from './styles'



const CardsFood = ({img, title, price, plus})=>{
    return(
        <CardContainer>
            <Container>
            <CardPhoto src={img}></CardPhoto>
            <Title>{title}</Title>
            <Price>{price}</Price>
            </Container>
            <Plus onClick={plus}>+</Plus>
        </CardContainer>
    )
}

export default CardsFood;