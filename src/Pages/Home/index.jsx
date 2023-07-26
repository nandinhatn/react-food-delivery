
import {Container, Wrapper} from './styles';
import ScrollToTop from "react-scroll-to-top";
import ContainerCardsComp from '../../Components/ContainerCardsComp'
import ContainerSlider from '../../Components/ContainerSlider';

const Home =()=>{

  
return(<>
    

    

    <Wrapper>
    <ScrollToTop/>
      <Container>

     
  {/*   <Header/> */}
    <ContainerSlider/>
    <ContainerCardsComp/>
    </Container>

 


    
   
   
    </Wrapper>
  
    </>
)
}
export default Home;