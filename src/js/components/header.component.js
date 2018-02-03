import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './searchbar';

class Header extends React.Component {

  render() {
    return (<nav className="navbar ">
      <SearchBar />
      <span className="button float-right">test</span>
    </nav>)
  }
}
const mapStateToProps = (state) => {
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
