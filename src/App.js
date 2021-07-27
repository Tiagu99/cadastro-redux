import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, Cliente, Notfound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Cliente} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
