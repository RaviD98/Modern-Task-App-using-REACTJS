import React, { useState } from 'react'
import "./TaskForm.css";
import Tag from './Tag';

const TaskForm = () => {

  const [task, setTask] = useState("");
  const handleTaskChange = e =>{
    setTask(e.target.value);
  }
  console.log(task)
  return (
    <header className="appHeader">
      <form>
        <input
          type="text"
          className="taskInput"
          placeholder="Enter yout task here.."
          onChange={handleTaskChange}
        />

        <div className="taskFormBottomLine">
          <div>
            <Tag tagName="HTML"/>
            <Tag tagName="CSS"/>
            <Tag tagName="JavaScript"/>
            <Tag tagName="React"/>
          </div>

          <div>
            <select className="taskStatus">
              <option value="todo">To Do</option>
              <option value="doing">To Do</option>
              <option value="done">To Do</option>
            </select>
            <button type="submit" className="taskSubmit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default TaskForm