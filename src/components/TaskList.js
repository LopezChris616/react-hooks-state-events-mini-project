import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  
  return (
    <div className="tasks">
      {tasks.map(task => {
        return <Task text={task.text} category={task.category} key={task.text} onTaskDelete={onTaskDelete} />
      })}
    </div>
  );
}

export default TaskList;
