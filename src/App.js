import FormConnexion from './components/formConnexion/formConnexion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeSearch from './pages/homeSearch/homeSearch';

function App() {  
  {var route =  
    <BrowserRouter>
      <Switch>
        <Route path ='/login'>
          <FormConnexion />
        </Route>
        <Route path ='/'>
          <HomeSearch />
        </Route>
      </Switch>
    </BrowserRouter>
  };

  return (
    <div>
      {route}
      <h2><a href='login'>Login</a></h2>
    </div>
  
  );
}

export default App;
