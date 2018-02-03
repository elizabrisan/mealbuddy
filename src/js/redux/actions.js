import RecipeApi from '../api/recipe.api';

export function getIngredientsList() {
  return {
    type: 'GET_INGREDIENTS_LIST',
    payload: RecipeApi.getIngredientsList()
  }

}
