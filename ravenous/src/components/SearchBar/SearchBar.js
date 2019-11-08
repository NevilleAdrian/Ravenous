import React from 'react';
import './SearchBar.css';



  class SearchBar extends React.Component{

    constructor(props){
      super(props);
      this.state = { 
        term:'',
        location:'',
        sortBy:'best_match'
        
      };
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

      this.sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
      }
    }


    getSortByClass(sortByOption){
     if(this.state.sortBy === sortByOption){
       return 'active'
     } else {
        return ''
     }

    }

    handleSortByChange(sortByOption) {
    this.setState({sortBy:sortByOption});

    }

    handleTermChange(e) {
      this.setState({term: e.target.value});
    }

    handleLocationChange(e) {
      this.setState({location: e.target.value});
    }

    handleSearch(e) {
      this.props.searchYelp(this.state.location, this.state.term, this.state.sortBy)
      e.preventDefault();
    }



 

    renderSortByOptions() {
       return Object.keys(this.sortByOptions).map(sortByOption => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        return(
        <li onClick={ () => this.handleSortByChange(sortByOptionValue) } className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        )
       });  
      }

     

    
 
    render() {
       return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input onChange={this.handleTermChange} placeholder="Search Businesses" />
              <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              <a onClick={this.handleSearch}>Let's Go</a>
            </div>
          </div>
          );    
   }

}
      

  export default SearchBar;