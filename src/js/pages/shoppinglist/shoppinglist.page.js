import React from 'react';
import {connect} from 'react-redux';

import {initialize, addToShoppingList, removeFromShoppingList, moveToFridge} from './shoppinglist.actions';

class ShoppingListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
    this.props._initialize();
  }

  render() {
    return (
      <div className='col-12 mt-5'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let {val} = this.state;

            if (val && this.props.shoppingList.indexOf(val) === -1) {
              this.props._addToShoppingList(val);
              this.setState({val: ''})
            }

          }}
          name="submit">
          <input className="form-control" value={this.state.val} onChange={(e) => {
              this.setState({val: e.target.value})
            }} placeholder="Add to ShoppingList"/>
          <button type="submit" style={{
              display: 'none'
            }}>Add</button>
        </form>
        <ul className="list-group">
          {
            this.props.shoppingList.map(item => {
              return (
                <li key={item} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item}</span>
                  <button onClick={() => {
                      this.props._removeFromShoppingList(item);
                    }}>Remove</button>
                  <button onClick={() => {
                      this.props._moveToFridge(item);
                    }}>Move to fridge</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {
    _initialize: () => {
      dispatch(initialize());
    },
    _addToShoppingList: (item) => {
      dispatch(addToShoppingList(item))
    },
    _moveToFridge: (item) => {
      dispatch(moveToFridge(item))
    },
    _removeFromShoppingList: (item) => {
      dispatch(removeFromShoppingList(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListPage);
