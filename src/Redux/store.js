import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import { createLogger } from "redux-logger"
import rootReducer from "./rootReducer"

const middleware = applyMiddleware(thunk, createLogger())
export default createStore(rootReducer, middleware);
