import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import TodoStore from "./redux/store/index";
import { TodosContext } from "./redux/contexts";

class App extends React.Component {
  render() {
    return (
      <Provider store={TodoStore} context={TodosContext}>
        <TodoList />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
