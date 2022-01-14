import React from 'react';
import pic from '../assets/img/pic 1.jpg';
import '../assets/css/card.css';

function Card(props){
    return(
        <div class="card">
            <img src ={pic}/>
            <div className="card-body">
                <h5 class="card-title text-truncate">{props.data.name}</h5>
                <p>PKR. <strong>{props.data.price}</strong></p>

                <div className="press">
                    <a href="#">Book Ticket</a>
                </div>
            </div>
        </div>
    );
}

export default Card;