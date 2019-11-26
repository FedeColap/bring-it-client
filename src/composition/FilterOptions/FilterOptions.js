import React, { Component } from 'react';

class FilterOptions extends Component {
  render() {

    return (
      <div className="FilterOptions">

          <label htmlFor='SearchForm__months'>
            Which month would you like to receive the goods?
          </label>
          <select name="months" id="SearchForm__months" required onChange={e => this.props.handleFilterChange(e.target.value)}>
                    <option value ="all">Select</option>
                    <option value ="jan">January</option>
                    <option value ="feb">February</option>
                    <option value ="mar">March</option>
                    <option value ="apr">April</option>
                    <option value ="may">May</option>
                    <option value ="jun">June</option>
                    <option value ="jul">July</option>
                    <option value ="aug">August</option>
                    <option value ="sep">September</option>
                    <option value ="oct">October</option>
                    <option value ="nov">November</option>
                    <option value ="dec">December</option>
                    
         </select>

      </div>
    );
  }
}

export default FilterOptions;