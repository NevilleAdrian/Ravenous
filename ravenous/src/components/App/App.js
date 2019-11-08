import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import yelp from '../../directory/yelp'



class App extends React.Component {
constructor(props) {
  super(props);
  this.state = { 
    businesses:[] 
  };
  this.searchYelp = this.searchYelp.bind(this);
}
  searchYelp(term,location,sortBy) {
    yelp.search(term, location, sortBy).then((businesses) => {
      console.log(businesses)
      this.setState({businesses:businesses})
    })
  }
 render() {
   return(
    <div className="App">
    <h1 className='no-margin'>ravenous</h1>
       <SearchBar searchYelp={this.searchYelp}/>
       <BusinessList myBusiness = {this.state.businesses}/>
  </div>
   )
 }
}

export default App;


