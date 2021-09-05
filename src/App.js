// import logo from './logo.svg';
// import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUSer from './components/users/EditUser';
import View from './components/users/View';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/user/add" component={AddUser}></Route>
          <Route exact path="/user/edit/:id" component={EditUSer}></Route>
          <Route exact path="/user/:id" component={View}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
