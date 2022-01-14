import React, { useState } from 'react';
// import pic from '../assets/img/pic 1.jpg';
import '../assets/css/cart.css';

function Cart(props) {
     const [products, setProduct] = useState([
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 1500, quantity: '2', totalprice: ' 4000', },
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 3000, quantity: '1', totalprice: ' 2500', },
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 2000, quantity: '1', totalprice: ' 3300', },
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Power Movie', price: 4500, quantity: '3', totalprice: ' 4500', },
     ]);

     return (
          <div className="cart">
               <div className="container">
                    <div className="row">

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
               </div>
          </div>
     );
}

export default Cart;