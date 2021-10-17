
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
      <Router>
       <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
          <Home></Home>
          </Route>

        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
