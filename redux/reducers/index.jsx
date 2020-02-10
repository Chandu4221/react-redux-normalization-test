import { keyBy } from "lodash";
import { LOAD_TODO, TOGGLE_TODO } from "../constants";
const initialState = {
  todosById: {},
  todoIds: [],
  loading: false,
  error: false
};

const createTodos = () =>
  new Array(1000).fill(null).map((_, id) => ({
    id,
    todoName: `Todo-${id}`,
    completed: false
  }));

export const TodoReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_TODO.PENDING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case LOAD_TODO.SUCCESS:
      const todos = createTodos();
      const dataById = keyBy(todos, todo => todo.id);
      return {
        ...state,
        loading: false,
        error: false,
        todosById: dataById,
        todoIds: Object.keys(dataById)
      };
    case LOAD_TODO.REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };
    case TOGGLE_TODO.PENDING:
      return {
        ...state
      };
    case TOGGLE_TODO.SUCCESS:
      return {
        ...state,
        todosById: {
          ...state.todosById,
          [action.id]: {
            ...state.todosById[action.id],
            completed: !state.todosById[action.id].completed
          }
        }
      };
    case "GET_STATE":
      console.log("STATE NOW", state);
      return state;
    default:
      return state;
  }
};
