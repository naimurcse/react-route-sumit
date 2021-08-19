import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
          </Switch>
      </Router>
  );
}

export default App;
