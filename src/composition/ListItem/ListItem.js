import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    //https://mathiasbynens.github.io/rel-noopener/
    return (
      <div className="ListItem">
            <p>{this.props.user_name} is going to {this.props.country} in the selected month!</p>
            <p className="butCan"><a href={`mailto:${this.props.email}`} target="_blank" rel="noopener noreferrer">Contact</a></p>

      </div>
    );
  }
}

export default ListItem;