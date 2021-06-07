import pic from '../assets/img/pic 1.jpg';

function Card(props){
    return(
        <div class="card">
            <img src ={pic} class="card-img-top" alt="pic"/>
            <div className="card-body">
                <h5 class="card-title text-truncate">{props.data.name}</h5>
                <p>PKR. <strong>{props.data.price}</strong></p>
                <p class="card-text">{props.data.description}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>


            </div>
        </div>
    );
}

export default Card;