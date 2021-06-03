import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import HomeSearch from './containers/homeSearch/homeSearch-test';
import FormConnexion from './components/formConnexion/formConnexion';
import FormInscription from './components/formInscription/formInscription'
import Accueil from './containers/accueil/accueil';
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
        <Route path ='/search'>
          <HomeSearch />
        </Route>
        <Route path ='/'>
          <Accueil />
        </Route>
      </Switch>
    </BrowserRouter>  
};

return route;
}
