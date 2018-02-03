import React from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: this.props.value || '',
        listStyle: {
          position: 'absolute',
          zIndex: 999,
          left: 0,
          top: 50,
          right: 0,
          display: 'none'
        }
      }
    }
    render() {
      
      return ( <div className = "filter-list"
                style = {
                  {
                    position: 'relative',
                    width: '100%'
                  }
                }>
        <form>
        <fieldset className = "form-group">
        <input type = "text"
        value={this.state.value}
        className = "form-control form-control-lg"
        placeholder = "Search"
        onChange = { (e) => {
          this.setState(
            {
              value: e.target.value,
              listStyle: {
                ...this.state.listStyle,
                display: e.target.value.length > 0 ? 'block' : 'none'
              }
            })
          }}/>  </fieldset >
        </form> <ListGroup style={this.state.listStyle} > {
          this.props.ingredientsList.filter(item => {
            return  item.strIngredient1.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
          }).map(item => {
              return ( < ListGroupItem key = {  item.strIngredient1  } > {
                  item.strIngredient1
                } < /ListGroupItem>)
              })
          }

          </ListGroup> < / div >
        );
      }
    };

    export default SearchBar;
