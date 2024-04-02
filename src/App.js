import "./App.css";
import { store } from "./Redux/store";
import { addTodo, addTodoAsync, decreaseCount, deleteTodo, increaseCount } from "./Redux/action";
import { useState } from "react";
import { counterReducer } from "./Redux/countReducer";
import { connect, useDispatch, useSelector } from "react-redux";


function App(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos)
  // const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  console.log("store", props);

  const handleIncrease = () => {
    // setCount((prev) => prev +1)
    props.increaseCount(10);
  };

  const handleDecrease = () => {
    // setCount((prev) => prev - 1)
    props.decreaseCount(2);
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

 

  const handleAddTodo = () => {
    dispatch(addTodoAsync());
    
    setName("")
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="App">
      <h1>Redux turtorials</h1>
      <h1>{props.count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <div>
        <input value={name} onChange={handleOnChange}></input>
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      {todos.map((todo, index) => {
        return (
          <div id={todo.id}>
            {index} - {todo.name}
            <span onClick={() => handleDeleteTodo(todo.id)}>X</span>
          </div>
        );
      })}
    </div>
  );
}

function mapStatetoProps(state) {
  return {
    count: store.getState().count.count,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    increaseCount: (data) => store.dispatch(increaseCount(data)),
    decreaseCount: (data) => dispatch(decreaseCount(data)),
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
