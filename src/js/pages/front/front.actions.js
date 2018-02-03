import RecipeApi from '../../api/recipe.api';

export function initialize() {
  return {type: 'GET_RANDOM_RECIPE', payload: RecipeApi.getRandomRecipe()}
}
