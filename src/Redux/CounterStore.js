import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'

const CounterStore=configureStore({
     reducer:{
        counterReducer:counterSlice 
      
     }

})

export default CounterStore