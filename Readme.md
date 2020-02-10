## This is a Sample Experiemnt Conducted to Know

## `How Redux State should be Normalized?`

If the response from an API is a Array of Data

`step-1`: Create a Object in the Redux State with id(KEY) - objectData(value)

```
response from an API is of type

[
  {
  id:1,
  todoName:"TODO-1",
  completed:false
  },
  {
  id:2,
  todoName:"TODO-2",
  completed:false
  },
  {
  id:3,
  todoName:"TODO-3",
  completed:false
  }
]
```

then we need to normalize this by creating a object in the redux state as

```
const initialState = {
  todosById:{},
  todoIds:[]
}
```

the `todosById` - is a Object with the `id`(key) - `value`(objectData). Example

```
const initialstate = {
  todosById:{
    1:{
      id:1,
      todoName:"TODO-1",
      completed:false
    },
    2:{
      id:2,
      todoName:"TODO-2",
      completed:false
    }
  },
  todoIds:["1","2","3"]
}
```

Reason for creating an array `todoIds[]` , which holds the keys(`ids`) of the `todosById` Object is because, Arrays Preserve the Sequential Ordering, where as objects don't.

`Step-2` : **mapStateToProps** - this is Most Important while mapping the component to the store.

Two things to keep in Mind.

1. what data the component actually needs?
2. which state of redux should be mapped to it.

`DON'T PASS UN-NECESSARY DATA TO THE COMPONENT OR THE PARENT COMPONENT - doing so will make the parent component render each time the store is changed. (EVEN FOR THE DATA WHICH IS NOT USED BY THE COMPONENT)`

In this case to render a list of todos - the todosList component don't even require the todos contents. This component Task is just to iterate over the `todoIds[]` Array using a `map` function and pass the `index` to the child Component.(i.e) `todoItem` component.

todoItem - on the other hand should watch for the changes only in it's own state.
(if other `todoItem` state is changes by an event, current `todoItem` don't need that information at all)

so **mapStateToProps** for this `todoItem` shoudl map to its own state in the redux by making use if the `id` passed by the parent. Like this

```
const mapStateToProps = (state, ownProps) => ({
  todoData: state.todosById[ownProps.id]
});
```

`ownProps` - will hold the data passed from the parent (`id` in this case).

Mapping the state of this component to its corresponding state in the redux.

example for the First TodoItem state would be like

```
ownProps.id = 0 (in this case)


const mapStateToProps = (state, ownProps) => ({
  todoData: state.todosById[0]
});
```

**todoData** -> will hold only this component information.

```
todoData:{
  id:0,
  todoName:"Todo-0",
  completed:false
}
```
