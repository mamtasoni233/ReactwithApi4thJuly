import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Error404 from './Pages/Error404';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Footer from './Pages/Footer';

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
        <Routes>
          {/* Auth Layout Routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route
              path="/register"
              element={<Register />}
              activeclassname="active"
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
          </Route>

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
