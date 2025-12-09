
import React from "react";

export default function RecipeList({ recipes, onSelect, selected }) {
  if (!recipes.length) return <div>No recipes yet. Add your first one!</div>;

  return (
    <div className="recipe-list">
      {recipes.map((r) => (
        <button
          key={r.id}
          className={
            "recipe-list-item" + (selected && selected.id === r.id ? " selected" : "")
          }
          onClick={() => onSelect(r)}
        >
          <h3>{r.title}</h3>
          <p className="meta">
            {r.difficulty} • {r.prepTime + r.cookTime} min • {r.tags.join(", ")}
          </p>
          <p className="description">
            {r.description.length > 80
              ? r.description.slice(0, 80) + "..."
              : r.description}
          </p>
        </button>
      ))}
    </div>
  );
}
