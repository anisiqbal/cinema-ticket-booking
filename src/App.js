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


function App() {
  return (
   <div>
     <Router>
       <Header/>
       <Switch>
         <Route path="/home"><Home/></Route>
         <Route path="/about"><About/></Route>
         <Route path="/contact"><Contact/></Route>
         <Route path="/"><Home/></Route>

       </Switch>
     </Router>

   </div>
  );
}

export default App;
