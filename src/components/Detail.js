import pic from '../assets/img/pic 1.jpg';
import '../assets/css/detail.css';

function Detail() {
    return (
        <div className="detail">
            <div className="container">
                <div className="row">

                    <div className="col-6">
                        <div className="image">
                            <img src={pic} alt="pic" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="left">
                            <h1>Power Movie</h1>
                            <h5>PKR 10,000</h5>

                            <div className="quantity">
                                <p className="float-left">Quantity</p>
                                <input class="form-control" placeholder="1" type="number" />
                            </div>

                            <div className="press">
                                <a href="/cart">Sumbit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Detail;