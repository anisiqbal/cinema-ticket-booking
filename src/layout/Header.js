import '../assets/css/header.css';
import logo from '../assets/img/logo.png'

import{
    Link
}from "react-router-dom";

function Header(){
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-3">
                        <a className="logo">
                            <img src={logo}/>
                        </a>
                    </div>
                    <div  className="col-md-9">
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                               <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                    <div>

                    </div>

                </div>

            </div>
            
        </nav>
    );
}

export default Header;