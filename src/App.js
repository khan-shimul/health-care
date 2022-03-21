import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import AddDoctors from './pages/Admin/AddDoctors/AddDoctors';
import Profile from './compo/IndexView/Doctors/Profile/Profile';
import Login from './pages/Login/Login/Login';
import AuthProvider from './hooks/context/AuthProvider/AuthProvider';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './pages/Admin/Dashboard/DashboardHome/DashboardHome';
import Dashboard from './pages/Admin/Dashboard/Dashboard/Dashboard';
import ManageAppointment from './pages/Admin/ManageAppointment/ManageAppointment';
import ManageDoctors from './pages/Admin/ManageDoctors/ManageDoctors';
import ManageReviews from './pages/Admin/ManageReviews/ManageReviews';
import ManageDiscount from './pages/Admin/ManageDiscount/ManageDiscount';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/doctors" element={<Doctors />} /> */}
            <Route path="/doctor-profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Dashboard */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/add-doctors" element={<AddDoctors />} />
              <Route path="/dashboard/manage-appointment" element={<ManageAppointment />} />
              <Route path="/dashboard/manage-doctors" element={<ManageDoctors />} />
              <Route path="/dashboard/manage-reviews" element={<ManageReviews />} />
              <Route path="/dashboard/manage-discount" element={<ManageDiscount />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
