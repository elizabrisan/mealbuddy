import api from './api';

export default class RecipeApi {

  static getRecipes(criteria) {
    return api.callApi('get', {uri: `/v1/1/list.php?${criteria}=list`});
  }

  static getRecipesByMainIngredient(ingredient) {
    return api.callApi('get', {uri: `/v1/1/filter.php?i=${ingredient}`});
  }

  static getRecipesByCategory(category) {
    return api.callApi('get', {uri: `/v1/1/filter.php?c=${category}`});
  }

  static getRecipesByArea(area) {
    return api.callApi('get', {uri: `/v1/1/filter.php?a=${area}`});
  }

  static getRecipesByName(name) {
    return api.callApi('get', {uri: `/v1/1/search.php?s=${name}`});
  }

  static getRecipesById(id) {
    return api.callApi('get', {uri: `/v1/1/lookup.php?i=${id}`});
  }

  static getRandomRecipe() {
    return api.callApi('get', {uri: `/v1/1/random.php`});
  }

  static getLatestRecipes() {
    return api.callApi('get', {uri: `/v1/1/latest.php`});
  }

}
