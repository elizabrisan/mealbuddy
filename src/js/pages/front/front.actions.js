import RecipeApi from '../../api/recipe.api';

export function initialize(ingredient) {
  if (ingredient) {
    return {type: 'GET_RECIPES', payload: RecipeApi.getRecipesByMainIngredient(ingredient)}
  } else {
    return {type: 'GET_RECIPES', payload: RecipeApi.getRandomRecipe()}
  }
}
