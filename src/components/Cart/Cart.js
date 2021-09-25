import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    let total=0
    for (const worker of cart)
       total=total +parseInt(worker.salary)
       
    return (
        <div>
           <h2>Overview </h2> 
           <h4>Items count: {props.cart.length}</h4> 
           <h4>Total cart: $ {total} </h4>
           {
               cart.map(cart=> <h4 className="img1"><img className="img" src={cart.img} alt="" /> Name: {cart.name}</h4>)
           }
        </div>
    );
};

export default Cart;