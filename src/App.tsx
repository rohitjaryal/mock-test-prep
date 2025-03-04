import { useState } from "react";

/**
 * Objectives:
 *  1. Add Active/ Inactive check - Done
 *  2. Review and fix issues. - Done
 *  3. Optimize the code base. - Done
 *  4. Unit testing.
 */

type Task = {
  id: string;
  content: string;
  active: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState("");

  function handleAdd() {
    const tempTasks = tasks;
    tempTasks.push({
      content: currentTask,
      active: false,
      id: crypto.randomUUID(),
    });
    setTasks(tempTasks);
    setCurrentTask("");
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        data-testid='new-todo-input'
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={(event) => setCurrentTask(event.target.value)}
        value={currentTask}
      />
      <button
        type="submit"
        data-testid="add-todo-btn"
        className="btn btn__primary btn__lg"
        onClick={handleAdd}
      >
        Add
      </button>

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        {tasks.filter((task) => !task.active).length} tasks remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map((task, index) => (
          <li className="todo stack-small" key={task.id}>
            <div className="c-cb">
              <input
                type="checkbox"
                checked={task.active}
                onChange={(e) => {
                  const newTasks = [...tasks];
                  newTasks[index].active = e.target.checked;
                  setTasks(newTasks);
                }}
              />
              <label className="todo-label" htmlFor={`todo-${index}`}>
                {task.content}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
