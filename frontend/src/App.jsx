
import React, { useEffect, useState } from "react";
import { fetchRecipes, createRecipe } from "./api";
import RecipeList from "./components/RecipeList.jsx";
import RecipeForm from "./components/RecipeForm.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadRecipes() {
    setLoading(true);
    setError("");
    try {
      const data = await fetchRecipes();
      setRecipes(data);
    } catch (e) {
      console.error(e);
      setError("Failed to load recipes");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  const handleSelect = (recipe) => {
    setSelected(recipe);
  };

  const handleCreate = async (payload) => {
    setError("");
    try {
      const created = await createRecipe(payload);
      setRecipes((prev) => [created, ...prev]);
      setSelected(created);
    } catch (e) {
      console.error(e);
      setError("Failed to create recipe");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Food Recipe App</h1>
        <p>Browse, create, and manage your favorite recipes.</p>
      </header>

      <main className="layout">
        <section className="left">
          <RecipeForm onCreate={handleCreate} />
          {error && <div className="error">{error}</div>}
          {loading ? (
            <div>Loading recipes...</div>
          ) : (
            <RecipeList recipes={recipes} onSelect={handleSelect} selected={selected} />
          )}
        </section>
        <section className="right">
          {selected ? (
            <RecipeDetail recipe={selected} />
          ) : (
            <div className="placeholder">Select a recipe to view details.</div>
          )}
        </section>
      </main>
    </div>
  );
}
