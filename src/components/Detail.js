import pic from '../assets/img/pic 1.jpg';
import '../assets/css/detail.css';

function Detail() {
    return (
        <div className="detail">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="detail-image">
                            <img src={pic} alt="pic" />
                        </div>
                    </div>

                    <div className="col-6">
                        <h1>Power Movie</h1>
                        <h5>PKR.10,000</h5>
                        <p>'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <p className="float-left">Quantity</p>
                                </div>

                                <div className="col-3">
                                    <input class="form-control" type="number" />
                                </div>
                            </div>
                            <div className="button">
                                <a href="#" class="btn btn-primary" >Add to Cart</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Detail;