import React from 'react';
import './App.css';
import Admin from './components/admin'
import { subRoutes } from './router'
import { Switch, Redirect } from 'react-router-dom'
import MyRoute from './components/myroute'

function App() {
  return (
    <div className="App">
      {sessionStorage.getItem("token") ?
        <Admin>
          <Switch>
            {
              subRoutes.map((item) => {
                return <MyRoute key={item.path} path={item.path} component={item.component} roles={item.roles} />
              })
            }
            <Redirect from="/home" to="/home/list" exact />
          </Switch>
        </Admin> : <Redirect to="/login" />}
    </div>
  );
}

export default App;
