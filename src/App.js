import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Header from './component/Header';
import Products from './component/Products';
import { productData, productDataTwo } from './component/Products/data';
import Cart from './component/Cart';
import Footer from './component/Footer';


function App() {
  return (
    <Router>
      
      <GlobalStyle />
      
      <Header />
      <Products heading='Choose your favorite' data={productData} />

      <Cart />
      <Products heading='Choose your favorite' data={productDataTwo} />
      <Footer />
    </Router>

     
  );
}

export default App;
