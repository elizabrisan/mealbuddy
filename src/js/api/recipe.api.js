import api from './api';

export default class RecipeApi {

  static getRecipes() {
    return api.callApi('get', {uri: `/v1/1/search.php?s=Arrabiata`});
  }

  static getRandomRecipe() {
    return api.callApi('get', {uri: `/v1/1/random.php`});
  }
}
