import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Header from '../../components/Header';
import AdminLogin from '../Admin-Login';
import AdminDashboard from '../Admin-Dashboard';
import Notification from '../Notifications';
import Transactions from '../Transactions';
import UserView from '../User-View';
import Mastersheet from '../Mastersheet/Mastersheet';
import SignUp from '../Sign-Up/SignUp';
import { AuthRoute, ProtectedRoute } from "../../utils/route";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute exact path="/admin/mastersheet" component={Mastersheet} />
          <ProtectedRoute exact path="/admin/transactions" component={Transactions} />
          <ProtectedRoute exact path="/admin/notification" component={Notification} />
          <AuthRoute exact path="/admin/signup" component={SignUp} />
          <AuthRoute exact path="/admin/login" component={AdminLogin} />
          <ProtectedRoute exact path="/admin/dashboard" component={AdminDashboard} />
          <ProtectedRoute exact path="/admin/userview/:id" component={UserView} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;