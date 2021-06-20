import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/home";

function App() {
  return (
    <Router>
    <Route exact path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
