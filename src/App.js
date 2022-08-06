import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import Registration from './components/Registration/Registration';
import AuthProvider, { AuthContext } from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping" element={<PrivateRoute><Shipping /> </PrivateRoute>} />
        <Route path="/placeorder" element={<PrivateRoute><PlaceOrder /> </PrivateRoute>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
