import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {

  static contextType = ApiContext;

  render() {
    
    //QUESTO E' IL CODE GIUSTO E INIZIALE------------------------------------
    // const list = this.context.store
    //     .filter(file => file.country.includes(this.props.country)
    //           && (file.month === 'all' || file.month === this.props.month))
    //     .map((file, key) => <ListItem {...file} key={key} />);

    let answer = "Sorry, no uses are available for your criteria";
    const list = this.context.store
    const listA = list.filter(file => 
        file.country.includes(this.props.country)
        && (file.month === 'all' || file.month === this.props.month));
        
        let finalResults = list.filter(file => file.country.includes(this.props.country)
                                        && (file.month === 'all' || file.month === this.props.month))
                                        .map((file, key) => <ListItem {...file} key={key} />);
        let listAL = listA.lenght;
        // if(listA.length === 0) {
        //   return answer
        // }else {finalResults}
        // .map((file, key) => <ListItem {...file} key={key} />);
        // if (listA.length === 0) {
        //   return answer
        // } else { list}

        console.log(listA)
        console.log(typeof(listA))
        console.log(listA.length)
        console.log(finalResults)
        
        
    return (
      <div className="FilterableList">
        <h4> Here are the results of your search</h4>
        <p>hello</p>
        {listAL}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  store: []
};


export default FilterableList;