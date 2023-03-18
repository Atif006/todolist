import { createStore } from "redux";
import { RootReducers } from "./reducers/RootReducers";

export const store=createStore(RootReducers);