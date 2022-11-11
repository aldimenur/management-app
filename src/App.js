/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { onValue, ref, set } from "firebase/database";

function App() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setTodos([]);
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const writeDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });

    setTodo("");
  };

  return (
    <div className="App">
      <input type="text" value={todo} onChange={handleTodoChange} />
      <button type="submit" onClick={writeDatabase}>
        SUBMIT
      </button>
      {todos.map((todo) => {
        return (
          <>
            <h2>{todo.todo}</h2>
          </>
        );
      })}
    </div>
  );
}

export default App;
