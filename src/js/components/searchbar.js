import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      listStyle: {
        display: 'none'
      }

    }

    this.filterList = this.filterList.bind(this)
  }

  filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    this.setState({
      items: updatedList,
      listStyle: {
        display: updatedList.length > 0
          ? 'block'
          : 'none'
      }
    });
  }

  render() {
    return (<div className="filter-list">
      <form>
        <fieldset className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
        </fieldset>
      </form>
      <ListGroup style={this.state.listStyle}>
        {
          this.state.items.map(item => {
            return (<ListGroupItem key={item}>{item}</ListGroupItem>)
          })
        }

      </ListGroup>
    </div>);
  }
};

export default SearchBar;
