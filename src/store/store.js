import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import table from "./reducers/table"
import calculator from "./reducers/calculator"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	table,
	calculator
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store