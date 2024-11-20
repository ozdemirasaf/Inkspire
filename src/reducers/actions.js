import store from "../store/store";
import { _setSidebarStatus, _rightBarStatus } from './ActionMenuReducer'

export const sidebarGetStatus = (status = null) => store.dispatch(_setSidebarStatus({ status }))

export const rightbarGetStatus = (status = null) => store.dispatch(_rightBarStatus({ status }))