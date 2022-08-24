import React, { useRef } from "react";
import "./styles.css";

///// takes in Props passes from App.tsx \\\\\
// handleAdd passed through Props, declared as a function with no return\\
interface Props {
  task: string | number;
  setTask: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

///// another option to bring in Props \\\\\
// const InputField: React.FC<Props> = ({ task, setTask }) => {
const InputField = ({ task, setTask, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input__box"
        placeholder="Enter Task"
      />
      <button className="input__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
