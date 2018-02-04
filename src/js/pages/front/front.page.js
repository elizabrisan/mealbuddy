import React from 'react';
import { connect } from 'react-redux';
import { initialize } from './front.actions';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import SearchBar from '../../components/searchbar/searchbar.component'

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    let ingredient = props.location && props.location.state
      ? props.location.state.ingredient
      : ''
    this.props._initialize(ingredient);
  }

  componentWillReceiveProps(newProps) {
    // let ingredient = newProps.location && newProps.location.state ? newProps.location.state.ingredient : ''; if (this.props.ingredient !== ingredient) {
    //
    // }
    if (newProps.ingredient !== this.props.ingredient) {
      this.props._initialize(newProps.ingredient);
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="mt-5 mb-5 col-12 col-sm-12 col-md-8 col-lg-6">
          <SearchBar ingredient={this.props.ingredient}
                     onSubmit={this.props._searchByIngredient}
                     ingredientsList={this.props.ingredientsList} />
        </div>
        <span className="row">
          {
            this.props.recipes.map(item => {
              return (<RecipeCard key={item.idMeal} recipe={item}/>)
            })
          }
        </span>
      </div>
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
