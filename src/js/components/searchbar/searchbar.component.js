import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import "./searchbar.component.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.ingredient || '',
      closed: true,
      listStyle: {
        display: 'none'
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.ingredient !== this.props.ingredient) {
      this.setState({value: newProps.ingredient})
    }
  }

  render() {

    return (
      <div className="filter-list">
        <span className="search-label">Enter the main ingredient</span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({
              listStyle: {
                ...this.state.listStyle,
                display: 'none'
              }
            })
            this.props.onSubmit(this.state.value)
          }}>
          <fieldset className="form-group">
            <input
              type="text"
              value={this.state.value}
              className="form-control form-control-lg"
              placeholder="Search"
              onChange={(e) => {
                this.setState({
                  value: e.target.value,
                  listStyle: {
                    ...this.state.listStyle,
                    display: e.target.value.length > 0
                      ? 'block'
                      : 'none'
                  }
                })
              }}/>
            <button type="submit" style={{
                display: 'none'
              }}>submit</button>
          </fieldset >
        </form>
        <ListGroup style={this.state.listStyle}>
          {
            this.props.ingredientsList.filter(item => {
              return item.strIngredient1.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            }).map(item => {
              return (<ListGroupItem
                  onClick={() => {
                    this.setState({
                      listStyle: {
                        ...this.state.listStyle,
                        display: 'none'
                      }
                    })
                    this.props._searchByIngredient(item.strIngredient1)
                  }}
                 key={item.strIngredient1}>
                {item.strIngredient1}
                < /ListGroupItem>)
              })
          }
        </ListGroup>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state.root
}

const mapDispatchToProps = (dispatch) => {
  return {
    _searchByIngredient: (ingredient) => {
      dispatch(push('/', {ingredient}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
