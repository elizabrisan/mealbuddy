import React from 'react';
import {connect} from 'react-redux';
import {initialize} from './front.actions';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import Loader from '../../components/loader.component';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.props._initialize(props.location.state.ingredient);
  }

  render() {
    console.log(this.props.recipes);
    return (
      <Loader loaded={this.props.loaded} className="col-12">
        {
          this.props.recipes.length > 0
            ? this.props.recipes.map(item => {
              return (<RecipeCard key={item.idMeal} recipe={item}/>)
            })
            : (<h1>There is no recipe selection: {this.props.location.state.ingredient}</h1>)
        }
      </Loader>
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
