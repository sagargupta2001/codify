
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './Components/public/pages/Home/Home';
import Login from './Components/public/pages/Login/Login';
import Register from './Components/public/pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
