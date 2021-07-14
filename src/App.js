import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import ProductDetails from "./components/pages/productdetails";


function App() {
  return (
    <Router>
    <Route exact path="/" component={Home}></Route>
      <Switch>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/productdetails" component={ProductDetails}></Route>
        </Switch>
    </Router>
  );
}

export default App;
