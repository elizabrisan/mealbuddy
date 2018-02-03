import React from 'react';
import {connect} from 'react-redux';

import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import FrontPage from './pages/front/front.page';
import FridgePage from './pages/fridge/fridge.page';
import ShoppingListPage from './pages/shoppinglist/shoppinglist.page';
import RoundProgress from './components/round.progress.component'
import Header from './components/header.component'

export class ShellPage extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <span>
          <Header/>
          <div className="container">
            <div className="row">
              <Route path="/" exact={true} component={FrontPage}></Route>
              <Route path="/fridge" component={FridgePage}></Route>
            <Route path="/shoppinglist" component={ShoppingListPage}></Route>
            </div>
          </div>
        </span>
      </ConnectedRouter >
    )
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, state.root);
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ShellPage);
