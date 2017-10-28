import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = applyMiddleware(thunk, logger);
export default createStore(reducer, middleware);
