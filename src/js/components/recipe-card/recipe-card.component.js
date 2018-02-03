import React, { Component } from 'react';
require("./recipe-card.component.scss");

export default class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
          <div className="body">
            <img className="image" src={'http://' + this.props.recipe.strMealThumb}></img>
            <div className="footer">
              <div className="name">{this.props.recipe.strMeal}</div>
              <div className="descr">{this.props.recipe.strInstructions}</div>
            </div>
          </div>
      </div>
    )
  }
}
