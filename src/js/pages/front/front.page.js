import React from 'react';
import {connect} from 'react-redux';
import {initialize} from './front.actions';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.props._initialize();
    // fetch('/api/json/v1/1/filter.php?i=lamb&i=onion&i=broccoli', {   mode: 'cors',   header: {     'Access-Control-Allow-Origin': '*'   } }).then(data => {   return data.json(); }).then(data => {   console.log(data); })
  }

  render() {
    console.log(this.props.recipes);
    return (<div>Front Page</div>)
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
