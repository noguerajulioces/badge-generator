import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import BadgePage from '../pages/BadgePage';
import Badges from '../pages/Badges';
import NotFount from '../pages/NotFount';


function App(){
  return(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgePage} />
        <Route component={NotFount} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;