import { createSlice } from "@reduxjs/toolkit";

export const todoslices=createSlice({
    name:'todo',
    initialState:[
            {
               task : "learn react redux",
               status:true
            },
            {
                task:"impeliment react redux",
                status:false
            }
        ],
        
    
    reducers:{
      add:(state,action)=>{
        state.todo.push(action.payload)

      },
     
    }
})
export const {add} = todoslices.actions
export default todoslices.reducer
