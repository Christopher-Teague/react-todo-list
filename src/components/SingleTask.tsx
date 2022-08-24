import React, { useEffect, useRef, useState } from "react";
import { Task } from "../model";
import "./styles.css";
import {
  RiEdit2Fill,
  RiDeleteBin2Fill,
  RiCheckboxCircleFill,
} from "react-icons/ri";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask = ({ task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string | number>(task.text);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: editTask } : task))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="tasks__single" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="tasks__single--text"
        />
      ) : task.isDone ? (
        <s className="tasks__single--text">{task.text}</s>
      ) : (
        <span className="tasks__single--text">{task.text}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <RiEdit2Fill />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <RiDeleteBin2Fill />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <RiCheckboxCircleFill />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
