import React, { useState } from "react";
import "./App.css";
import "./components/styles.css";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string | number>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, isDone: false }]);
      setTask("");
    }
  };

  console.log(tasks);

  return (
    <div className="App">
      <span className="header">Things To-Do</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
