import React, { Component } from 'react';
require("./recipe-card.component.scss");

export default class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
        <div className="card border-light mb-3">
          <div className="card-header">{this.props.recipe.strMeal}</div>
          <div className="card-body">
            <img className="card-image" src={'http://' + this.props.recipe.strMealThumb}></img>
            <p className="card-text">{this.props.recipe.strInstructions}</p>
          </div>
          <div className="card-footer text-muted">
            <a href="#" className="fa fa-clock-o"></a>
          </div>
        </div>
      </div>
    )
  }
}
