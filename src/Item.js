import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Item =(props)=>{
    const[view,setView]= useState("Save Data")
    

    return(
        <tr>
           <td>{props.name}</td>
           <td>{props.symbol}</td>
           <td>{props.market_cap}</td>
           <td>{props.current_price}</td>
           <td>
             <Link className="btn btn-primary" to="/view">{view}</Link>
           </td>
       </tr>
      )

}
export default Item;