import React, {useState} from 'react';
import{
    Link
} from "react-router-dom";
import Card from '../shared/Card';


function Home(){
    const [products, setProduct] = useState ([
        
        { Id: 1, name: 'Power Movie', price: 1000 , description: 'There are many variations of passages of Lorem Ipsum available' },
        { Id: 1, name: 'Barry Movie', price: 6000 , description: 'There are many variations of passages of Lorem Ipsum available' },
        { Id: 1, name: 'Bright Movie', price: 8000 , description: 'There are many variations of passages of Lorem Ipsum available' },
        { Id: 1, name: 'Beats Movie', price: 10000 , description: 'There are many variations of passages of Lorem Ipsum available' },
    ]);

            return(
                <div className = "container">
                    <div className ="row">
                        {
                            products.map((item,i) => {
                                return(
                                    <div className ="col-md-3 my-3">
                                         <Link to="/detail">
                                            <Card data={item}/>
                                         </Link>
                                    </div>
                                )

                            })
                        }

                    </div>

                </div>
            );
}

export default Home;