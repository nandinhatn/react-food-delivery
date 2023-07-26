
import './App.css';
import Home from './Pages/Home'
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import { Container , ContainerTotal, Wrapper} from './styles';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Carrinho from './Pages/Carrinho'
import Navigation from './Components/Navigation';
import store from './redux/store'
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <Provider store={store}>

  <ThemeProvider theme={theme}>
  <Container>
    


<Wrapper>
    
<ContainerTotal>
  

<BrowserRouter>
<Header/>
<Navigation/>

        <Routes >

          
          
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route  index  path="/pizzaria"  element={<Home/>} />
         
        
        </Routes>
      </BrowserRouter>
</ContainerTotal>
</Wrapper>

   </Container>
  </ThemeProvider>
    </Provider>
  );
}

export default App;
