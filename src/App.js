import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tasks, setTask] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTasks = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const editTask = (task) => {
    const newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTask(newTasks);
  };

  const deleteTask = (id) => {
    const newListTask = tasks.filter((t) => t.id !== id);
    setTask(newListTask);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TodoList
                deleteTask={deleteTask}
                tasks={tasks}
                setEditingTask={setEditingTask}
              />
            }
          />
          <Route
            path="/todo-form"
            element={
              <TodoForm
                addTasks={addTasks}
                editTask={editTask}
                editingTask={editingTask}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
