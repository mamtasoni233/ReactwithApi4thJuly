
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import { Outlet, Route, BrowserRouter, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Error404 from './Pages/Error404';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Service from './Pages/Service';
import Visit from './Pages/Visit';
import Gallery from './Pages/Gallery';
import { ToastContainer } from 'react-toastify';
// A wrapper component to include Navbar and Footer for every route
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
const AuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Auth Layout Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route
              path="/register"
              element={<Register />}
              activeclassname="active"
            />
            <Route path="*" element={<Error404 />} />
          </Route>

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/visit-us" element={<Visit />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
