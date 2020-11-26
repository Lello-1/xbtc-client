import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../../components/Header';
import AdminLogin from '../Admin-Login';
import AdminDashboard from '../Admin-Dashboard';
import Notification from '../Notifications';
import Transactions from '../Transactions';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/admin/transactions" component={Transactions} />
          <Route exact path="/admin/notification" component={Notification} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;