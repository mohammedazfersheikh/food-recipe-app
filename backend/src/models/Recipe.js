
// Simple in-memory recipe store for demo purposes.
// In production you would replace this with a database model (MongoDB, Postgres, etc).

let recipes = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    description: "Classic Roman pasta dish with eggs, cheese, pancetta, and pepper.",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 20,
    tags: ["italian", "pasta", "comfort"],
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs",
      "50g Pecorino Romano",
      "Black pepper",
      "Salt"
    ],
    steps: [
      "Cook spaghetti in salted boiling water.",
      "Fry pancetta until crisp.",
      "Beat eggs with grated cheese and pepper.",
      "Combine hot pasta with pancetta and egg mixture off heat.",
      "Serve immediately with extra cheese."
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export function getAllRecipes(query = {}) {
  const { search, tag } = query;
  let result = [...recipes];

  if (search) {
    const lower = search.toLowerCase();
    result = result.filter(
      (r) =>
        r.title.toLowerCase().includes(lower) ||
        r.description.toLowerCase().includes(lower)
    );
  }

  if (tag) {
    result = result.filter((r) => r.tags.includes(tag.toLowerCase()));
  }

  return result;
}

export function getRecipeById(id) {
  return recipes.find((r) => r.id === id);
}

export function createRecipe(data) {
  const id = String(Date.now());
  const now = new Date().toISOString();
  const recipe = {
    id,
    title: data.title,
    description: data.description || "",
    difficulty: data.difficulty || "easy",
    prepTime: data.prepTime || 0,
    cookTime: data.cookTime || 0,
    tags: data.tags || [],
    ingredients: data.ingredients || [],
    steps: data.steps || [],
    createdAt: now,
    updatedAt: now
  };
  recipes.push(recipe);
  return recipe;
}

export function updateRecipe(id, updates) {
  const idx = recipes.findIndex((r) => r.id === id);
  if (idx === -1) return null;

  const now = new Date().toISOString();
  recipes[idx] = {
    ...recipes[idx],
    ...updates,
    updatedAt: now
  };
  return recipes[idx];
}

export function deleteRecipe(id) {
  const idx = recipes.findIndex((r) => r.id === id);
  if (idx === -1) return false;
  recipes.splice(idx, 1);
  return true;
}
