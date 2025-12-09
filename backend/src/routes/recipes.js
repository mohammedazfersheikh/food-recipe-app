
import express from "express";
import {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from "../models/Recipe.js";

const router = express.Router();

// GET /api/recipes
router.get("/", (req, res) => {
  const recipes = getAllRecipes(req.query);
  res.json(recipes);
});

// GET /api/recipes/:id
router.get("/:id", (req, res) => {
  const recipe = getRecipeById(req.params.id);
  if (!recipe) return res.status(404).json({ error: "Recipe not found" });
  res.json(recipe);
});

// POST /api/recipes
router.post("/", (req, res) => {
  const { title, ingredients, steps } = req.body;
  if (!title || !ingredients || !steps) {
    return res.status(400).json({ error: "title, ingredients and steps are required" });
  }
  const recipe = createRecipe(req.body);
  res.status(201).json(recipe);
});

// PUT /api/recipes/:id
router.put("/:id", (req, res) => {
  const updated = updateRecipe(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Recipe not found" });
  res.json(updated);
});

// DELETE /api/recipes/:id
router.delete("/:id", (req, res) => {
  const ok = deleteRecipe(req.params.id);
  if (!ok) return res.status(404).json({ error: "Recipe not found" });
  res.status(204).send();
});

export default router;
