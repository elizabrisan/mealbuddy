import React from 'react';
import {connect} from 'react-redux';

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
      <div>
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
          <input className="form-control" onChange={(e) => {
              this.setState({val: e.target.value})
            }} placeholder="Add to fridge"/>
          <button type="submit">Add</button>
        </form>
        <ul className="list-group">
          {
            this.props.content.map(item => {
              return (
                <li key={item} className="list-group-item d-flex justify-content-between align-items-center">

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      let {val} = item;

                      if (val && this.props.content.indexOf(val) === -1) {
                        this.props._removeFromFridge(val);
                        this.setState({val: ''})
                      }
                    }}
                    name="remove">
                    <span>{item}</span>
                    <button onClick={() => {
                        this.props._removeFromFridge(item)
                      }}>Remove</button>
                  </form>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FridgePage);
