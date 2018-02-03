import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getById } from './recipe-card.actions';

require("./recipe-card.component.scss");

class RecipeCard extends Component {

  constructor(props) {
    super(props);
    this.props._getById(props.recipe.idMeal);
  }

  render() {
    return (
      <div className="recipe-card col-12 col-sm-6 col-md-4 col-xl-3">
          <div className="body">
            <img className="image" src={'http://' + this.props.recipe.strMealThumb}></img>
            <div className="footer">
              <span className="info">
              </span>
              <div className="name">{this.props.recipe.strMeal}</div>
              <div className="descr">{this.props.recipe.strInstructions}</div>
            </div>
          </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {
    _getById: (id) => {
      dispatch(getById(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
