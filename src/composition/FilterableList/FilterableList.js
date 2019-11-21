import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {

  static contextType = ApiContext;

  constructor(props) {
    super(props);
    
  }

  render() {

    let answer = "Sorry, no uses are available for your criteria";
    
    // const store = this.props.store
    console.log(this.props)
    // console.log(store)
    console.log(this.context.store)
    // const list = this.context.store
    const store = this.props.store
    
        .filter(file => 
        file.country.includes(this.props.country)
        && (file.month === 'all' || file.month === this.props.month));
        // console.log(list)

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

    //QUESTO E' IL CODE INIZIALE------------------------------------
    // const list = this.context.store
    //     .filter(file => file.country.includes(this.props.country)
    //           && (file.month === 'all' || file.month === this.props.month))
    //     .map((file, key) => <ListItem {...file} key={key} />);
        
    // return (
    //   <div className="FilterableList">
    //     <h4> Here are the results of your search</h4>
    //     <p>hello</p>
    //     {list}
    //   </div>
    // );
  }
}

FilterableList.defaultProps = {
  store: []
};


export default FilterableList;