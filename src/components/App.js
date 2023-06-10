import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All");
  const [taskList, setTaskList] = useState(TASKS);

  function handleTaskDelete(deletedTask) {
    setTaskList(taskList.filter(task => {
      return task.text !== deletedTask;
    }))
  }

  const filteredTasks = taskList.filter(task => {
    if(category === "All") return true;

    return task.category === category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} changeCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={taskObj => setTaskList([...taskList, taskObj])} />
      <TaskList tasks={filteredTasks} selectedCategory={category} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
