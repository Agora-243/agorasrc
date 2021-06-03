import './App.css';
import Router from './router';
//import { connect } from 'react-redux';
import { Fragment } from 'react';
//import { setSearchField } from './actions.js'

//const mapStateToProps = state => { 
 // return {
   // searchField : state.searchProduit.searchField
  //}
//};

//const mapDispatchToProps = (dispatch) => {(console.log(dispatch))};

function App(props) {  
 
  
  return <Router />;

}

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);
