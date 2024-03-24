import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  LoginSignup  from './Pages/LoginSignup';
import  Shop  from './Pages/Shop';
import  ShopCategory  from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart  from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import Paypal from './Components/Paypal/Paypal';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function App() {
  

  return (
    
    <div>
      <BrowserRouter>
        <Navbar />
    
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
