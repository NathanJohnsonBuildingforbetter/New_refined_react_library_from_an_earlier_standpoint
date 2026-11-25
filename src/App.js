// import logo from './logo.svg';
// import './App.css';
// import Discounted from "./Components/Discounted";
// import Explore from "./Components/Explore";
// import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
// import Highlights from "./Components/Highlights";
// import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import{BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import {books} from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import React, { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([]);
  // function addToCart(book) {
  //   // console.log('add to cart', book)
  //   const dupeItem = cart.find(item => +item.id === +book.id)
  //   if(dupeItem){
  //   dupeItem.quantity += 1}
  function addToCart(book) {
  setCart(prevCart => {
    const existingItem = prevCart.find(
      item => Number(item.id) === Number(book.id)
    );

    if (existingItem) {
      return prevCart.map(item =>
        Number(item.id) === Number(book.id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevCart, { ...book, quantity: 1 }];
  });
}

function changeQuantity(book, quantity){
 setCart(cart.map(item => (item.id === book.id) ? 
        {          
          ...item,
          quantity: +quantity,
        } : item
           
 ))
 
  // console.log(book, quantity)
}
function removeItem(item){
  setCart(cart.filter(book => book.id !== item.id))

}
function numberOfItems(){
 let counter = 0;
 cart.forEach(item => {counter += item.quantity})
 return counter;
}

  useEffect(() => {
    console.log(cart)
  }, [cart]  )

  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id"  render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
      <Route path="/cart"  render={() => <Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
