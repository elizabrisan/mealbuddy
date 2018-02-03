import RecipeApi from '../../api/recipe.api';

export function initialize() {
  return {type: 'GET_RECIPES', payload: RecipeApi.getRandomRecipe()}
}
