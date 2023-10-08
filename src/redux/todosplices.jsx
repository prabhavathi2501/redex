import { createSlice } from "@reduxjs/toolkit";

export const todoslices=createSlice({
    name:'todo',
    initialState:[
            {
               task : "",
               discription:""
            },
            {
                task:"",
                discription:""
            }
        ],
        
    
    reducers:{
      add:(state,action)=>{
        state.push(action.payload)

      },
     
    }
})
export const {add} = todoslices.actions
export default todoslices.reducer
