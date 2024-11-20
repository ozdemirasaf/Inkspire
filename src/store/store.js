import { configureStore } from "@reduxjs/toolkit";
import ActionMenuReducer from '../reducers/ActionMenuReducer'


const store = configureStore({
    reducer: {
        menus: ActionMenuReducer
    }
})

export default store;