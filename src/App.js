import logo from './logo.svg';
import './App.css';
import Home from './Component/TrangChu/Home';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
