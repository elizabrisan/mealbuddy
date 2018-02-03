import React from 'react';
import {connect} from 'react-redux';


import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import FrontPage from './pages/front/front.page';

export class ShellPage extends React.Component {
  render() {
    return (<ConnectedRouter history={this.props.history}>
      <Route path="/" exact={true} component={FrontPage}></Route>
    </ConnectedRouter >)
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, state.root);
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ShellPage);
