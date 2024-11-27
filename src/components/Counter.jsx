import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'




function Counter() {

    const [amount,setAmount]=useState(0)
     
   const dispatch=useDispatch()

   const {count}=useSelector((state)=>state.counterReducer)

   const handleIncrementByAmount=()=>{
     if(amount){

        dispatch(incrementByAmount(Number(amount)))
        
        
        

     }
     else{
        alert("plese enter the number")
     }

   }

  return (

    <div className='d-flex align-items-center justify-content-center flex-column ' style={{minHeight:'100vh',backgroundColor:'black'}}> 
    <h1 className='text-white mb-4'>Counter App</h1>
    <div className=' flex-column border border-3 p-5 rounded' style={{height:"400px",width:"700px"}}>
        <h1 className='fs-1 text-center text-white '>{count}</h1>

      <div className='d-flex align-items-center justify-content-around mt-5'>
        <button  onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Incerement</button>

      </div>
        <div className='mt-5 d-flex justify-content-between'>
            <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control'placeholder='Increment counter amount'/>
            <button onClick={handleIncrementByAmount} className='btn btn-primary ms-3'>Increment By Amount</button>
        </div>
        
    </div>

    </div>
  )
}

export default Counter