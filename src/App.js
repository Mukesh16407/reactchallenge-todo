import { useState } from "react";
import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addCities = (e) => {
    //Complete function
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodos = todos.filter((to) => to.id !== id);
    setTodos([...delTodos]);
  };
  return (
    <div className="App">
      <form onSubmit={addCities}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="singleText" key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleDelete(t.id)}>X</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
