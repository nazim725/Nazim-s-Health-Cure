
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
import Register from './Components/Registration/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div>
     
     <AuthProvider>
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
          <Route path='/register'>
            <Register></Register>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

        </Switch>
      </Router>
     </AuthProvider>
     
  
     
    </div>
  );
}

export default App;
