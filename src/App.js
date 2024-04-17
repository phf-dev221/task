import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RoutePublic from './RoutesPublic';

function App() {
  return (

    <Routes>

      <Route path="/*" element={<RoutePublic />} />

    </Routes>


  );
}

export default App;
