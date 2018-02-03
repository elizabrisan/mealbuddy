import React from 'react';
import {connect} from 'react-redux';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);

    fetch('/api/json/v1/1/filter.php?i=lamb&i=onion&i=broccoli', {
      mode: 'cors',
      header: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(data => {
      return data.json();
    }).then(data => {
      console.log(data);
    })
  }

  render() {
    return (<div>Front Page</div>)
  }

}

const mapStateToProps = (state) => {
  return state.front
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
