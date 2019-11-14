import React, { Component } from 'react';

class ListItem extends Component {
  render() {

    return (
      <div className="ListItem">
            <p>{this.props.user_name} is going to {this.props.country} in the selected month!</p>
            <p className="butCan"><a href={`mailto:${this.props.email}`} target="_blank">Contact</a></p>

      </div>
    );
  }
}

export default ListItem;