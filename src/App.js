import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import ProductDetails from "./components/pages/productdetails";
import Cart from "./components/pages/cart";
import Account from "./components/pages/account";

function App() {
  return (
    <Router>
    <Route exact path="/" component={Home}></Route>
      <Switch>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/productdetails" component={ProductDetails}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/account" component={Account}></Route>
        </Switch>
    </Router>
  );
}

export default App;
