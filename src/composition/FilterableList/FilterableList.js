import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {

  static contextType = ApiContext;

  render() {

    let answer = "Sorry, no uses are available for your criteria";

    const store = this.props.store
    
        .filter(file => 
        file.country.includes(this.props.country)
        && (file.month === 'all' || file.month === this.props.month));


    let listA = store.map((file, key) => <ListItem {...file} key={key} />);
        
    if(store.length === 0) {
          return (
                  <div className="FilterableList">
                    <h4 className="fancy h4form"> Here are the results of your search</h4>
                    {answer}
                  </div>
          );
    }else {return (
                <div className="FilterableList">
                  <h4 className="fancy h4form"> Here are the results of your search</h4>
                  {listA}
                </div>
    );}

  }
}

FilterableList.defaultProps = {
  store: []
};


export default FilterableList;