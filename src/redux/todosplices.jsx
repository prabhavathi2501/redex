import { createSlice } from "@reduxjs/toolkit";

export const todosplices=createSlice({
    name:'todo',
    initialState:{
        todo:[
            {
               task : "learn react redux",
               status:true
            },
            {
                task:"impeliment react redux",
                status:false
            }
        ],
        count:0,
    },
    reducers:{
      add:(state,action)=>{
        state.todo.push(action.payload)

      },
      toggle:(state,action)=>{

      }
    }
})
export const {add,toggle} = todosplices.actions
