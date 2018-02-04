import React from 'react';
import { Redirect } from 'react-router'
import SearchBar from '../searchbar/searchbar.component';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux';
import "./header.component.scss";

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse header">
        <Link to="/" className="logo"/>
        <span className="buttons">
          <Link to="/shoppinglist"><i className="fas fa-cart-plus" title="list"></i></Link>
          <Link to="/fridge"><i className="fas fa-snowflake" title="fridge"></i></Link>
        </span>
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
