import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import './ClubWorker.css'


const ClubWorker = (props) => {
    const{img,name,post,age,education,adress,salary}=props.worker
    const cartIcon = <FontAwesomeIcon icon={faAddressCard } />
   
    return (
   
            <div className="col-md-4 shadow-sm">
                <div style={{backgroundColor:"lightgrey",
                 borderRadius:"10px",marginTop:"20px"}}>
                <img  style={{borderRadius:"30px",width:"130px",marginTop:"5px"}} src={img} alt="" />
                <h4 style={{fontWeight:"700"}}>Name: {name}</h4>
                <h6>age :{age}</h6>
                <h6>post : {post}</h6>
                <h6>adress : {adress}</h6>
                <h6>Education:{education}</h6>
                <p>Salary: $ {salary}</p>
                <button style={{backgroundColor:"lightslategray",
                cursor:"pointer",
                border:"1px solid white",
                width:"70%",marginBottom:"5px",borderRadius:"10px"}}
                onClick={()=>props.AddToCart(props.worker)}
                >{cartIcon}  add to cart</button>
                </div>
             </div>
  
    );
};

export default ClubWorker;