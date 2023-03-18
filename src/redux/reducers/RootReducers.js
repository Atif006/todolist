import { combineReducers } from "redux";
import { addToDOList } from "./reducers";

export const RootReducers=combineReducers({
    addToDOList,
})