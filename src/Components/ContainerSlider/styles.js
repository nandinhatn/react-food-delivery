import styled from "styled-components";
import Slider from 'react-slick'
export const Carousel=styled(Slider)`


.slick-slide{
    
  
    display:flex;
    background: ${(prop)=> prop.theme.colors.primary};
    justify-content: center;
    align-items: center;
    color: white;
   
    width: 100%;
  
}
.slick-prev::before,.slick-next:before{
    color: ${(props)=> props.theme.colors.primary}
}

`;
export const CarouselImg = styled.img`
object-fit: cover;
border-radius: 6px;
`;

export const ContainerSliderStyle = styled.div`

/* border-top: 1px solid #ccc; */
/* border-bottom: 1px solid #ccc; */

background: ${(prop)=> prop.theme.colors.primary};
color: white;
justify-content: center;
align-items: center;
padding-bottom: 10px;
width: 100%;



top: 70px;
z-index: 99999;


`;
