
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Shared/NavBar/HeaderNav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DealBooking from './pages/Home/Deals/DealBooking/DealBooking';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddNewOffer from './pages/AddNewOffer/AddNewOffer';
import Footer from './Shared/Footer/Footer';
import MyBookings from './pages/MyBookings/MyBookings';
import ManageAllBookings from './pages/ManageAllBookings/ManageAllBookings';
import NotFound from './pages/Notfound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <HeaderNav></HeaderNav>
          <Switch>
            <Route path="/home">
              <Home></Home></Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/deals/:id">
              <DealBooking></DealBooking>
            </PrivateRoute>
            <PrivateRoute path="/addnew">
              <AddNewOffer></AddNewOffer>
            </PrivateRoute>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
