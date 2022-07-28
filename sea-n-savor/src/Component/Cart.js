import React,{useState} from 'react';

function Cart(){
    const [spicy,setSpicy]=useState("");
    const[size,setSize]=useState("");

 
    return(
        

  <div className="cart">


    
    <div>


    <select
          id="type"  value={size} onChange={(e)=>setSize(e.target.value)}
          >Size
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
        </select>
        <select
          id="type"
          value={spicy} onChange={(e)=>setSpicy(e.target.value)}
        >
          <option value="spicy">Spicy</option>
          <option value="non-spicy">Non-spicy</option>
          
        </select>
        </div>

        <div>
          <button value="delete">Delete</button>
        </div>
    <div className="row">
       <button >Checkout </button>
    </div>
      
      

        
       

      </div>


    )
}

export default Cart;