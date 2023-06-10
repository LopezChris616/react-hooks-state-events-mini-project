import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, changeCategory }) {

  const displayCategories = categories.map(category => {
    const classList = selectedCategory === category ? "selected" : null;
    return <button key={category} className={classList} onClick={() => changeCategory(category)}>{category}</button>
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
