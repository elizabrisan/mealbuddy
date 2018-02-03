import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {initialize, addToFridge, removeFromFridge} from './fridge.actions';

class FridgePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
    this.props._initialize();
  }

  render() {
    return (
      <div className='col-12'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let {val} = this.state;
            if (val && this.props.content.indexOf(val) === -1) {
              this.props._addToFridge(val);
              this.setState({val: ''})
            }
          }}
          name="submit">
          <input className="form-control"
            value={this.state.val}
            onChange={(e) => {
              this.setState({val: e.target.value})
            }} placeholder="Add to fridge"/>
          <button style={{
              display: 'none'
            }} type="submit">Add</button>
        </form>
        <ul className="list-group">
          {
            this.props.content.map(item => {
              return (
                <li key={item} onClick={() => {
                    this.props._goToMain(item)
                  }} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item}</span>
                  <button onClick={(e) => {
                      e.stopPropagation()
                      this.props._removeFromFridge(item)
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
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {
    _initialize: () => {
      dispatch(initialize());
    },
    _addToFridge: (item) => {
      dispatch(addToFridge(item))
    },
    _removeFromFridge: (item) => {
      dispatch(removeFromFridge(item))
    },
    _goToMain: (ingredient) => {
      dispatch(push('/', {ingredient}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FridgePage);
