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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/doctors" element={<Doctors />} /> */}
          <Route path="/doctor-profile/:id" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-doctors" element={<AddDoctors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
