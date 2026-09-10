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


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" render={() => <Books books={books} />} />
      <Route path="/books/1" render={() => <BookInfo books={books} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
