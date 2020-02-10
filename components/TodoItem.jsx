import React from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { TodosContext } from "../redux/contexts";
import { toggleTodo, getState } from "../redux/actions";

class TodoItem extends React.Component {
  render() {
    const { id, todoName, completed } = this.props.todoData;
    const { toggleTodo, getState } = this.props.actions;
    console.log("RENDER");
    return (
      <div>
        <h1>Todo ID - {id} </h1>
        <h2>Todo Name - {todoName}</h2>
        <h3>Is Completed - {completed ? "YES" : "NO"}</h3>
        <button onClick={() => toggleTodo(id)}>Toggle Todo</button>
        <button onClick={getState}>Get State</button>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todoData: state.todosById[ownProps.id]
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleTodo, getState }, dispatch)
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: TodosContext }
  )
)(TodoItem);
