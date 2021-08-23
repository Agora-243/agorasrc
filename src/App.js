import './App.css';
import Router from './router';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { setSearchField } from './actions.js'

{/*const mapStateToProps = state => { 
  return {
 searchField : state.searchProducts.searchField
  }
} 

const mapDispatchToProps = (dispatch) => { 
  return {
   onChange : e => dispatch(setSearchField(e.target.value)) 
  };
*/}

function App(props) {  
 
  
  return <Router />;

}

 
export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);
