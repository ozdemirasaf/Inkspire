import { useSelector } from "react-redux";

export const useSetSidebar = () => useSelector(state => state.menus.sidebarStatus)

export const useRightbar = () => useSelector(state => state.menus.rightbarStatus)