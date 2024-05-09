import { combineReducers } from "redux";
import { dataReducer, reducer, reducerUser } from "./Reducers";

 const reducers= combineReducers({
    count: reducer,
    user: reducerUser,
    weather: dataReducer
})

export default reducers