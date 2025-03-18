import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home, CreateProduct,Cart,MyProducts,ProductDetails,Profile} from './Routes.jsx'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create-product" element={<CreateProduct/>}/>
      <Route path="/create-product/:id" element={<CreateProduct/>}/>
      <Route path="/my-products" element={<MyProducts/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
