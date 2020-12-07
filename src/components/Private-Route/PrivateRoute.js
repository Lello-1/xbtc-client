import './PrivateRoute.css';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [isAuthed, setIsAuthed] = useState(true);

  const options = {
    url: 'http://localhost:3000/admin/authenticate',
    method: 'get',
    withCredentials: true
  }
  
  const appAuth = {
    async authenticate() {
      const auth = await axios(options);
      console.log(auth.data);
      if (auth.data.authenticated) {
        console.log('SETTING ISAUTHED TO TRUE');
        setIsAuthed(true);
      }
    },
    signout(cb) {
      
    }
  }

  appAuth.authenticate();

  return (
    <React.Fragment>
      <Route {...rest} render={(props) => (console.log('IS', isAuthed) &&
        isAuthed === true
        ? <Component {...props} />
        : <Redirect to='/admin/login' />
      )} />
    </React.Fragment>
  );

}

export default PrivateRoute;