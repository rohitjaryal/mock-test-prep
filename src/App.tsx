import { useState } from "react";

/**
 * Objectives:
 *  1. Add Active/ Inactive check
 *  2. Review and fix issues.
 *  3. Optimize the code base.
 *  4. Unit testing.
 */

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Todo List
      </h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            flex: "1",
            borderRadius: "4px",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#e5e7eb",
              padding: "8px",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#6b7280" : "black",
              }}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => toggleTodo(todo.id)}
                style={{
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "none",
                }}
              >
                {todo.completed ? "Completed" : "In-completed"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "none",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
