import logo from './logo.svg';
import './App.css';
import Home from './Component/TrangChu/Home';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import {createBrowserHistory} from 'history'
export const history = createBrowserHistory(); //Cho phép điều hướng trang


function App() {
  
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
