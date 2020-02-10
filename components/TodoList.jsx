import React from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { TodosContext } from "../redux/contexts";
import { loadTodos } from "../redux/actions";
import TodoItem from "./TodoItem";
class TodoList extends React.Component {
  componentDidMount() {
    const { loadTodos } = this.props.actions;
    loadTodos();
  }
  render() {
    const { todoIds } = this.props;
    // const { todoIds } = todoData;
    console.log("PRENT RENDER");
    return (
      <div>
        {todoIds.map(todo => (
          <TodoItem key={todo} id={todo} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todoIds: state.todoIds
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadTodos }, dispatch)
});
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: TodosContext }
  )
)(TodoList);
