import React, {useState} from 'react';
import pic from '../assets/img/pic 1.jpg';
import '../assets/css/cart.css';

function Cart(props) {
     const [products, setProduct] = useState([
          { Id: 1, image: 'https:images.app.goo.gl/24X454JZfSB8f7Gj9', name: 'Power Movie', price: 1000, quantity: '6', totalprice: ' 60000', },
     ]);

     return (
          <div className="container">

               {
                    products.map((item, i) => {
                         return (
                              <div className="row">
                                   <div className="col-2">
                                        <img src={item.image} class= "w-50"/>
                                   </div>
                                   <div className="col-4">
                                        <h4>{item.name}</h4>
                                   </div>
                                   <div className="col-2">
                                        price
                                   </div>
                                   <div className="col-1">
                                        Qty
                                   </div>
                                   <div className="col-2">
                                        total price
                                   </div>
                                   <div className="col-1">
                                        <button type="button" class="close" aria-label="Close">
                                             <span aria-hidden="true">&times;</span>
                                        </button>
                                   </div>
                              </div>
                         )
                    })
               }
          </div>
     );
}

export default Cart;