import '../assets/css/header.css';
import logo from '../assets/img/logo.png'
import{ Link }from "react-router-dom";

function Header(){
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-3">
                            <a className="logo">
                                <a href="/home"><img src={logo}/></a>
                            </a>
                        </div>

                        <div  className="col-9">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/Cart">Cart</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;