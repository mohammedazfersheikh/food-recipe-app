
import React from "react";

export default function RecipeDetail({ recipe }) {
  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p className="meta">
        Difficulty: <strong>{recipe.difficulty}</strong> • Total time:{" "}
        <strong>{recipe.prepTime + recipe.cookTime} min</strong>
      </p>
      {recipe.tags?.length ? (
        <p className="tags">
          Tags:{" "}
          {recipe.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </p>
      ) : null}
      {recipe.description && <p className="description">{recipe.description}</p>}

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
