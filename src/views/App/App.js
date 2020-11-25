import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../../components/Header';
import AdminLogin from '../Admin-Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/admin/login" component={AdminLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;