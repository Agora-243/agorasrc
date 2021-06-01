import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import HomeSearch from './containers/homeSearch/homeSearch';
import FormConnexion from './components/formConnexion/formConnexion';
import FormInscription from './components/formInscription/formInscription'

export default function Router (){
{
  var route =  
    <BrowserRouter>
      <Switch>
        <Route path ='/login'>
          <FormConnexion />
        </Route>
        <Route path ='/register'>
          <FormInscription />
        </Route>
        <Route path ='/'>
          <HomeSearch />
        </Route>
      </Switch>
    </BrowserRouter>  
};

return route;
}
