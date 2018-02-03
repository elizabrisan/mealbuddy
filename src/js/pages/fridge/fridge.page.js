import React from 'react';
import {connect} from 'react-redux';

class FridgePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Fridge Page</div>)
  }

}

const mapStateToProps = (state) => {
  return state.fridge
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FridgePage);
