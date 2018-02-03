import RecipeApi from '../../api/recipe.api';

export function getById(id) {
  return {type: 'GET_RECIPE_BY_ID', payload: RecipeApi.getRecipeById(id)}
}
