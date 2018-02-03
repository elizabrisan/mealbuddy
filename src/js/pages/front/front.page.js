import React from 'react';
import {connect} from 'react-redux';
import {initialize} from './front.actions';
import RecipeCard from '../../components/recipe-card/recipe-card.component';


class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    let ingredient = props.location && props.location.state ? props.location.state.ingredient : ''
    this.props._initialize(ingredient);
  }

  render() {
    return (
        <span className="row">
        {
          this.props.recipes.length > 0
            ? this.props.recipes.map(item => {
              return (<RecipeCard key={item.idMeal} recipe={item}/>)
            })
            : (<h1>There is no recipe selection:</h1>)
        }
        </span>
    )
  }

}

const mapStateToProps = (state) => {
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {
    _initialize: (ingredient) => {
      dispatch(initialize(ingredient));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
