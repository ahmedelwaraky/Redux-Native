import React from 'react'
import {useDispatch, useSelector, } from 'react-redux'


export default function Counter() {

    const {count} = useSelector( (state)=> state.x)
    console.log(count);

    //concction called Dispach
    const dispatch = useDispatch()
 
    const increaseHandler =()=>{
        console.log("increaseHandler");
        dispatch({type : "INCREASE" , payload : 5})
    }
    const decreaseHandler =()=>{
        console.log("decreaseHandler");
        dispatch({type : "DECREASE"})

    }

return (<>
    <div className="bg-light p-5 text-center">
        <h1> counter</h1>
        <h5> count : {count}</h5>
        <button className='btn btn-outline-success mx-2' onClick={increaseHandler}>+</button>
        <button className='btn btn-outline-danger mx-2'onClick={decreaseHandler}>-</button>
    </div>
   
</>)
}
