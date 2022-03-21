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
import Dashboard from './pages/Admin/Dashboard/Dashboard/Dashboard';
import ManageReviews from './pages/Admin/ManageReviews/ManageReviews';
import MakeAdmin from './pages/Admin/MakeAdmin/MakeAdmin';
import ManageDoctors from './pages/Admin/ManageDoctors/ManageDoctors/ManageDoctors';
import UpdateDoctor from './pages/Admin/ManageDoctors/UpdateDoctor/UpdateDoctor';
import ManageAppointments from './pages/Admin/Dashboard/DashboardHome/ManageAppointments/ManageAppointments';

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
              <Route path="/dashboard" element={<ManageAppointments />} />
              <Route path="/dashboard/add-doctors" element={<AddDoctors />} />
              <Route path="/dashboard/make-admin" element={<MakeAdmin />} />
              <Route path="/dashboard/manage-doctors" element={<ManageDoctors />} />
              <Route path="/dashboard/update-doctor/:id" element={<UpdateDoctor />} />
              <Route path="/dashboard/manage-reviews" element={<ManageReviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
