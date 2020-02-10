import { LOAD_TODO, TOGGLE_TODO } from "../constants";

export const loadTodos = () => dispatch => {
  dispatch({ type: LOAD_TODO.PENDING });
  dispatch({ type: LOAD_TODO.SUCCESS });
};

export const toggleTodo = id => dispatch => {
  dispatch({ type: TOGGLE_TODO.PENDING });
  dispatch({ type: TOGGLE_TODO.SUCCESS, id: id });
};

export const getState = () => dispatch => {
  dispatch({ type: "GET_STATE" });
};
