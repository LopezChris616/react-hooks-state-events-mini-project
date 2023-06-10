import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  });

  function handleTextChange(event) {
    setFormData({...formData, text: event.target.value});
  }

  function handleCategoryChange(event) {
    setFormData({...formData, category: event.target.value});
  }

  function handleNewTask(event) {
    event.preventDefault();
    const taskData = {
      text: formData.text,
      category: formData.category
    }
    onTaskFormSubmit(taskData);
  }

  const displayOptions = categories.map(category => {
    if(category !== "All") {
      return <option value={category} key={category}>{category}</option>
    }
  })

  return (
    <form className="new-task-form" onSubmit={handleNewTask}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleCategoryChange}>
          {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
