
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Servicedetails from './Components/ServiceDetails/Servicedetails';
import Doctors from './Components/Doctors/Doctors';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import About from './Components/About/About';


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
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/serviceDetails/:serviceId'>
            <Servicedetails></Servicedetails>
          </Route>

          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>

          <Route path='/doctorDetails/:doctorId'>
            <DoctorDetails></DoctorDetails>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
