import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TodoReducer } from "../reducers";
const TodoStore = createStore(
  TodoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default TodoStore;
