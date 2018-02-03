import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './searchbar';
import { Link } from 'react-router-dom'
import {push} from 'react-router-redux';

class Header extends React.Component {

  render() {
    return (<nav className="navbar ">
      <div style={{
          marginRight: 100,
          width: '100%'
        }}>
        <SearchBar ingredient={this.props.ingredient}
        onSubmit={this.props._searchByIngredient}
        ingredientsList={this.props.ingredientsList} />
      </div>
      <div style={{position: 'absolute', right: 10}}>
        <Link to="/shoppinglist"><i className="fa fa-list-alt fa-2x" title="list"></i></Link>
        <Link to="/fridge"><i className="fa fa-archive fa-2x" title="fridge"></i></Link>
      </div>
    </nav>)
  }
}
const mapStateToProps = (state) => {
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {
    _searchByIngredient: (ingredient) => {
      dispatch(push('/', {ingredient}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
