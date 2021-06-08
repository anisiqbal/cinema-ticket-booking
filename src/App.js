import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from './layout/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Card from './shared/Card';


function App() {
  return (
   <div>
     <Router>
       <Header/>
       <Switch>
         <Route path="/home"><Home/></Route>
         <Route path="/about"><About/></Route>
         <Route path="/contact"><Contact/></Route>
         <Route path="/detail"><Detail/></Route>
       </Switch>
     </Router>

   </div>
  );
}

export default App;
