import React,{useState} from 'react';

function Cart(){
    const [spicy,setSpicy]=useState("");
    const[size,setSize]=useState("");

 const [count,setCount] = useState(0);
const incrementCount=()=>{
    setCount((count)=>count+ 1)
}
function handleSubmit(e){
    e.preventDefault();
}
    return(
        

      <div onSubmit={handleSubmit} className='card'>
      <button >-</button>
      
      <button onClick={incrementCount} >+:{count}</button>
      <button value="delete">Delete</button>
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


        <input type="submit" value="Add to cart" />

      </div>


    )
}

export default Cart;