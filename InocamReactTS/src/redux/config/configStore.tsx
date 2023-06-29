import { combineReducers, legacy_createStore as createStore } from "redux";
import todoReducer from '../modules/todoReducer'

const rootReducers = combineReducers({todoReducer})
const store = createStore(rootReducers)

export default store