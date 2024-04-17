import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Tache from './pages/Tache';
import TacheEdit from './pages/TacheEdit';
import TacheAdd from './pages/TacheAdd';
import Error from './pages/Error';

const RoutePublic = () => {
    return (
        <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/task" element={<Tache />} />
            <Route path="/task-edit" element={<TacheEdit />} />
            <Route path="/task-add" element={<TacheAdd />} />
      
      <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default RoutePublic;