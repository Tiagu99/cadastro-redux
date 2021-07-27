import { Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Cliente, Dashboard, Notfound } from './pages/index.jsx';
import history from './history.js';
import './App.css';

function App() {
  return (
    <Router history={ history }>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Cliente} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
