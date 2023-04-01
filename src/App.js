import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import SingleFood from './components/SingleFood/SingleFood';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import { createContext, useState } from 'react';
import FinalOrder from './components/FinalOrder/FinalOrder';

export const userContex = createContext();
export const productContex = createContext();
export const mapContex = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [cardItem, setCardItem] = useState([]);
  const [map, setMap] = useState({
    dPlace: '',
    dAddress: '',
    dFlat: '',
    dName: '',
    dInstructor: '',
  });

  return (
    <>
    <userContex.Provider value={[isLogin, setIsLogin]}>
    <productContex.Provider value={[cardItem, setCardItem]}>
    <mapContex.Provider value={[map, setMap]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/breakfast" element={<Breakfast />}></Route>
          <Route path="/lunch" element={<Lunch />}></Route>
          <Route path="/dinner" element={<Dinner />}></Route>
          <Route path="/food/:code" element={<SingleFood />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/finalorder" element={<FinalOrder />}></Route>

          <Route exact path='/' element={<PrivetRoute/>}>
            <Route exact path='/shipment' element={<Shipment/>}/>
          </Route>

          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </Router>
    </mapContex.Provider>
    </productContex.Provider>
    </userContex.Provider>
    </>
  );
}

export default App;
