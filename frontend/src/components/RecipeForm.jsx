
import React, { useState } from "react";

const defaultState = {
  title: "",
  description: "",
  difficulty: "easy",
  prepTime: 10,
  cookTime: 20,
  tags: "",
  ingredients: "",
  steps: ""
};

export default function RecipeForm({ onCreate }) {
  const [form, setForm] = useState(defaultState);

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.ingredients || !form.steps) return;

    const payload = {
      title: form.title,
      description: form.description,
      difficulty: form.difficulty,
      prepTime: Number(form.prepTime) || 0,
      cookTime: Number(form.cookTime) || 0,
      tags: form.tags
        ? form.tags.split(",").map((t) => t.trim().toLowerCase())
        : [],
      ingredients: form.ingredients
        .split("\n")
        .map((i) => i.trim())
        .filter(Boolean),
      steps: form.steps
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean)
    };

    onCreate(payload);
    setForm(defaultState);
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>
      <div className="field">
        <label>Title *</label>
        <input
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
          placeholder="Spaghetti Carbonara"
          required
        />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="Short description of the recipe"
        />
      </div>
      <div className="field-row">
        <div className="field">
          <label>Difficulty</label>
          <select
            value={form.difficulty}
            onChange={(e) => update("difficulty", e.target.value)}
          >
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
        </div>
        <div className="field">
          <label>Prep (min)</label>
          <input
            type="number"
            value={form.prepTime}
            onChange={(e) => update("prepTime", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Cook (min)</label>
          <input
            type="number"
            value={form.cookTime}
            onChange={(e) => update("cookTime", e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label>Tags (comma separated)</label>
        <input
          value={form.tags}
          onChange={(e) => update("tags", e.target.value)}
          placeholder="italian, pasta, comfort"
        />
      </div>
      <div className="field">
        <label>Ingredients * (one per line)</label>
        <textarea
          value={form.ingredients}
          onChange={(e) => update("ingredients", e.target.value)}
          placeholder={"200g spaghetti\n2 eggs\n100g pancetta"}
          required
        />
      </div>
      <div className="field">
        <label>Steps * (one per line)</label>
        <textarea
          value={form.steps}
          onChange={(e) => update("steps", e.target.value)}
          placeholder={"Boil pasta\nCook pancetta\nCombine with egg mixture"}
          required
        />
      </div>
      <button type="submit" className="primary">
        Save Recipe
      </button>
    </form>
  );
}
