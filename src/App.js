
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
import Footer from './Components/Footer/Footer';
import Ambulance from './Components/Ambulance/Ambulance';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import LogoutModal from './Components/Logout/Logout';
import BookingAmbulance from './Components/BookingAmbulance/BookingAmbulance';
import AppointDoctor from './Components/AppointDoctors/AppointDoctor';
import BookingService from './Components/BookingServices/BookingService';


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
          <PrivateRoute path='/serviceDetails/:serviceId'>
            <Servicedetails></Servicedetails>
          </PrivateRoute>
          <Route path='/bookingServices/:serviceId'>
            <BookingService></BookingService>
          </Route>

          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>

          <PrivateRoute path='/doctorDetails/:doctorId'>
            <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <Route path='/appointDoctor/:doctorId'>
            <AppointDoctor></AppointDoctor>
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

          <Route path='/ambulance'>
            <Ambulance></Ambulance>
          </Route>
          <Route path='/logout'>
            <LogoutModal></LogoutModal>
          </Route>

          <PrivateRoute path='/bookingAmbulance/:ambulanceId'>
            <BookingAmbulance></BookingAmbulance>
          </PrivateRoute>
        

          <Router path='*'>
            <NotFound></NotFound>
          </Router>

          

        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
     
  
     
    </div>
  );
}

export default App;
