import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/home.css';
import Card from '../shared/Card';


function Home() {
    const [products, setProduct] = useState([

        { Id: 1, name: 'Power Movie', price: 1000,},
        { Id: 1, name: 'Barry Movie', price: 6000,},
        { Id: 1, name: 'Bright Movie', price: 8000,},
        { Id: 1, name: 'Beats Movie', price: 10000,},
    ]);

    return (
        <div>
            <section>
                <div className="slider">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <h1>BOOK YOUR TICKETS FOR MOVIES</h1>

                                <div className="press">
                                    <a href="/detail">Book Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="products">
                    <div className="container">
                        <div className="row">
                            {
                                products.map((item, i) => {
                                    return (
                                        <div className="col-3">
                                            <Link to="/detail">
                                                <Card data={item} />
                                            </Link>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;