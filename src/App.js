import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from './layout/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Cart from './components/Cart';


function App() {
  return (
   <div>
     <Router>
       <Header/>
       <Switch>
         <Route path="/home"><Home/></Route>
         <Route path="/movies"><Movies/></Route>
         <Route path="/contact"><Contact/></Route>
         <Route path="/detail"><Detail/></Route>
         <Route path="/cart"><Cart/></Route>


       </Switch>
     </Router>

   </div>
  );
}

export default App;
