import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import { Button, Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <Container fixed>
      <Router>
          <Button color="primary">Hello World</Button>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/shop" component={Shop} />
            <Route path="*" component={NotFound} />
          </Switch>
      </Router>
      </Container>
  );
}

export default App;
