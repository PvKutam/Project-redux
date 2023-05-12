import { createStore,applyMiddleware } from "redux"
import {Reducer} from "./User/Reducer"
import thunk from "redux-thunk"
import {logger} from "redux-logger"
 

const store= createStore(Reducer,applyMiddleware(logger,thunk))

export default store