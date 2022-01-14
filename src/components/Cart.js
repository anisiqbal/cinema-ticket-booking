import React, { useState } from 'react';
import '../assets/css/cart.css';

function Cart(props) {
     const [products, setProduct] = useState([
          { Id: 1, image: 'https://cdn.pastemagazine.com/www/articles/main-image.jpg', name: 'Moon Light', price: 1500, quantity: '2', totalprice: ' 4000', },
          { Id: 1, image: 'https://media.comicbook.com/2021/08/dune-movie-1278601.jpeg?auto=webp&width=544&height=680&crop=544:680,smart', name: 'Dune Movie', price: 3000, quantity: '1', totalprice: ' 2500', },
          { Id: 1, image: 'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg', name: 'Star War Movie', price: 2000, quantity: '1', totalprice: ' 3300', },
          { Id: 1, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr7E4HUjXEOaRAS_RP6-770L8dvL6MlB6dF-g1wd4anLqkj3M', name: 'Barry Movie', price: 4500, quantity: '3', totalprice: ' 4500', },
     ]);

     return (
          <div className="cart">
               <div className="container">
                    <div className="row">

                         {
                              products.map((item, i) => {
                                   return (
                                        <div className="row">

                                             <div className="col-2">
                                                  <div className="inner">
                                                       <img src={item.image}/>
                                                  </div>
                                             </div>

                                             <div className="col-2">
                                                  <div className="inner">
                                                       <h4>{item.name}</h4>
                                                  </div>
                                             </div>

                                             <div className="col-2">
                                                  <div className="inner">
                                                       <p>{item.price}</p>
                                                  </div>
                                             </div>

                                             <div className="col-1">
                                                  <div className="inner">
                                                       <p>{item.quantity}</p>
                                                  </div>
                                             </div>

                                             <div className="col-2">
                                                  <div className="inner">
                                                       <p>{item.totalprice}</p>
                                                  </div>                                                 
                                             </div>

                                             <div className="col-2">
                                                  <div className="inner">
                                                       <button type="button" class="close" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                       </button>
                                                  </div>
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