import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarStatus: false,
    rightbarStatus: false
}


const ActionMenuReducer = createSlice({
    name: 'menuStatus',
    initialState,
    reducers: {
        _setSidebarStatus: (state) => {
            state.sidebarStatus = !state.sidebarStatus
        },

        _rightBarStatus: (stata) => {
            stata.rightbarStatus = !stata.rightbarStatus
        }
    }
})

export const { _setSidebarStatus, _rightBarStatus } = ActionMenuReducer.actions
export default ActionMenuReducer.reducer