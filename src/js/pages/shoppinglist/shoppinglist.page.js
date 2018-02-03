import React from 'react';
import {connect} from 'react-redux';

import {initialize, addToShoppingList, removeFromShoppingList} from './shoppinglist.actions';

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
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let {val} = this.state;

            if (val && this.props.content.indexOf(val) === -1) {
              this.props._addToShoppingList(val);
              this.setState({val: ''})
            }

          }}
          name="submit">
          <input className="form-control" onChange={(e) => {
              this.setState({val: e.target.value})
            }} placeholder="Add to ShoppingList"/>
          <button type="submit">Add</button>
        </form>
        <ul className="list-group">
          {
            this.props.content.map(item => {
              return (
                <li key={item} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{item}</span>
                    <button onClick={() => {
                        this.props._removeFromFridge(item);
                      }}>Remove</button>
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
  return state.shoppingList
}

const mapDispatchToProps = (dispatch) => {
  return {
    _initialize: () => {
      dispatch(initialize());
    },
    _addToShoppingList: (item) => {
      dispatch(addToShoppingList(item))
    },
    _removeFromFridge: (item) => {
      dispatch(removeFromShoppingList(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListPage);
