import React from 'react';
import {connect} from 'react-redux';
import {initialize} from './front.actions';
import RecipeCard from '../../components/recipe-card/recipe-card.component';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.props._initialize('chicken');
  }

  render() {
    console.log(this.props.recipes);
    return (<div>
        { this.props.recipes.map(item => {
          return (<RecipeCard key={item.idMeal} recipe={item}/>)
        })}
      </div>)
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
