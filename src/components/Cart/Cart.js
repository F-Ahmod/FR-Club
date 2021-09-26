import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    let total=0
    for (const worker of cart)
       total=total +parseInt(worker.salary)
       
    return (
        <div className="cart-text shadow-md">
           <h4>F&R club member : {props.cart.length}</h4> 
           {
               cart.map(cart=> <h4 className="img1"><img className="img" src={cart.img} alt="" /> <br /><small> Name: {cart.name}</small> <br /><small>Annual salary : $ {cart.salary}</small></h4>)
           }
           <h4 className="total">Total Salary : $ {total} </h4>
        </div>
    );
};

export default Cart;