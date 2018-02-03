import React from 'react';
import {connect} from 'react-redux';

class FrontPage extends React.Component {

  render() {
    return (<div>Front Page</div>)
  }

}

const mapStateToProps = (state) => {
  return state.front
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
