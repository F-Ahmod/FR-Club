import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import './ClubWorker.css'


const ClubWorker = (props) => {
    const{img,name,post,age,education,adress,salary}=props.worker
    const cartIcon = <FontAwesomeIcon icon={faAddressCard } />
   
    return (
   
            <div className="col-md-4 shadow-md">
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.426)",
                 borderRadius:"10px",marginTop:"20px"}}>
                <img  style={{borderRadius:"50%",width:"130px",height:"130px",marginTop:"5px"}} src={img} alt="" />
                <h4 style={{fontWeight:"700",color:"white"}}>{name}</h4>
                
                <h6 style={{color:"white"}}> {post}</h6>
                <h6 style={{color:"white"}}>Age :{age}</h6>
                <h6 style={{color:"white"}}>Education:{education}</h6>
                <h6 style={{color:"white"}}>Adress : {adress}</h6>
                <p style={{color:"whitesmoke"}}>Salary: $ {salary}</p>
                <button style={{backgroundColor:"rgba(0, 0, 0, 0.426)",color:"white",
                cursor:"pointer",
                border:"1px solid white",
                padding:"6px 16px",marginBottom:"15px",borderRadius:"10px"}}
                onClick={()=>props.AddToCart(props.worker)}
                >{cartIcon}  Add to Team</button>
                </div>
             </div>
  
    );
};

export default ClubWorker;