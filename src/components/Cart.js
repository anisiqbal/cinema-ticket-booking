import React, { useState } from 'react';
import pic from '../assets/img/pic 1.jpg';
import '../assets/css/cart.css';

function Cart(props) {
     const [products, setProduct] = useState([
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 1000, quantity: '6', totalprice: ' 60000', },
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 1000, quantity: '6', totalprice: ' 60000', },
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 1000, quantity: '6', totalprice: ' 60000', },
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 1000, quantity: '6', totalprice: ' 60000', },
     ]);

     return (
          <div className="container">

               {
                    products.map((item, i) => {
                         return (
                              <div className="row">
                                  
                                   <div className="col-4">
                                        <h4>{item.name}</h4>
                                   </div>
                                   <div className="col-2">
                                        <p>{item.price}</p>
                                   </div>
                                   <div className="col-1">
                                        <p>{item.quantity}</p>
                                   </div>
                                   <div className="col-2">
                                        <p>{item.totalprice}</p>
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