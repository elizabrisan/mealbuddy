import React from 'react';
import {connect} from 'react-redux';
import {initialize} from './front.actions';
import RecipeCard from '../../components/recipe-card/recipe-card.component';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.props._initialize();
    // fetch('/api/json/v1/1/filter.php?i=lamb&i=onion&i=broccoli', {   mode: 'cors',   header: {     'Access-Control-Allow-Origin': '*'   } }).then(data => {   return data.json(); }).then(data => {   console.log(data); })
  }

  render() {
    console.log(this.props.recipes);
    return (<div>Front Page
        { this.props.recipes.map(item => {
          return (<RecipeCard key={item.idMeal} recipe={item}/>)
        })}
      </div>)
  }

}

const mapStateToProps = (state) => {
  return state.front
}

const mapDispatchToProps = (dispatch) => {
  return {
    _initialize: () => {
      dispatch(initialize());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
