import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Footer from './components/Footer';
import Items from './components/Items';
import Checkout from './components/Checkout';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState("[]")
  const [cart, setCart] = useState({})
  const getDiscountedAmount = (discountPercentage, price) => {
    return Number(((price / 100) * discountPercentage).toFixed(2))
}

  useEffect(() => {
    const data = fetch("https://dummyjson.com/products")
    // const data = fetch("http://127.0.0.1:5000/products")
    data.then((result) => {
      return result.json()
    }).then((result) => {
      
      setProducts(JSON.stringify(result.products))
    })
    
  }, [products])
  const newProducts = JSON.parse(products).map((obj) => {
    obj.discountAmount = getDiscountedAmount(obj.discountPercentage, obj.price)
    return obj
  })
  return (
    <div className='container'>
      <Title />
      <Items products={newProducts} cart={cart} setCart={setCart}/>
      <Checkout cart={cart} setCart={setCart}/>
      <Footer />
    </div>
  );
}

export default App;
