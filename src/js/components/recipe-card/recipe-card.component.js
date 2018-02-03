import React, { Component } from 'react';
require("./recipe-card.component.scss");

export default class RecipeCard extends Component {
  render() {
    return (
      <div className="card border-light mb-3">
        <div className="card-header">{this.props.recipe.strMeal}</div>
        <div className="card-body text-primary">
          <img src={this.props.recipe.strMealThumb}></img>
          <h4 className="card-title">{this.props.recipe.strMeal}</h4>
          <p className="card-text">{this.props.recipe.strInstructions}</p>
        </div>
      </div>
    )
  }
}
