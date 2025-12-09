
import axios from "axios";

export async function fetchRecipes() {
  const res = await axios.get("/api/recipes");
  return res.data;
}

export async function createRecipe(payload) {
  const res = await axios.post("/api/recipes", payload);
  return res.data;
}
