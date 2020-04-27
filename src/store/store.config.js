import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

/** Ducks */
import salons from "./ducks/salons";
import jobApplications from "./ducks/jobApplications";

const loggerMiddleware = createLogger();
const middlewares = [thunk, loggerMiddleware];

const reducer = combineReducers({
  salons,
  jobApplications
});

const storeConfig = initialState =>
  createStore(reducer, initialState, applyMiddleware(...middlewares));

export default storeConfig;
