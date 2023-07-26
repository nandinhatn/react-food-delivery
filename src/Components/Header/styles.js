import styled from "styled-components";
import Slider from 'react-slick'


export const Container = styled.div`
display: flex;
justify-content: center;
padding: 20px 0 20px 0;
background-color: white;
flex-wrap: wrap;
/* border-bottom: 1px solid #ccc; */









`;
export const ImageLogo= styled.img`
 width:110px;
 height: 110px;
 object-fit: cover;
 border-radius: 50%;
`;
export const Carousel=styled(Slider)`

.slick-slide{
    
  
    display:flex;
}
.slick-prev::before,.slick-next:before{
    color: ${(props)=> props.theme.colors.primary}
}
`;
export const CarouselImg = styled.img`
width:70px;
height:70px;
object-fit: cover;
border-radius: 6px;
`;

export const ContainerSlider = styled.div`
margin-top:20px;
border-top: 1px solid #ccc;
border-bottom: 1px solid #ccc;

padding: 20px;

`;

