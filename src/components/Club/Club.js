import React, { useEffect, useState } from 'react';
import './Club.css'
import ClubWorker from './../ClubWorker/ClubWorker';
import Cart from './../Cart/Cart';

const Club = () => {
    const[worker,setWorker]=useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('./Club.JSON')
        .then(res=>res.json())
        .then(data=>setWorker(data))
    })
    const AddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
    }
    
    return (
        <div className="row">
            <div className="col-md-9 left-site">
                <div className="row">
                {
                    worker.map((worker) =><ClubWorker
                    key={worker.id}
                    worker={worker}
                    AddToCart={AddToCart}
                    >
                    </ClubWorker>
                    )
               }
                </div>
            </div>
            <div className="col-md-3">
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Club;