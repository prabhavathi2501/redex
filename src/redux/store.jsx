import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosplices"

export default configureStore ({
    reducer:{todo:todoReducer}
})