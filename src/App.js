import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Router from './router';
import { Fragment } from 'react';
import { setSearchField } from './actions.js'

const mapStateToProps = state => { 
  return {
    searchField : state.searchProduit.searchField
  }
}

const mapDispatchToProps = (dispatch)

function App(props) {  
 
  
  return <Router />;

}

export default connect(mapStateToProps, mapDispactchToProps)(App);
