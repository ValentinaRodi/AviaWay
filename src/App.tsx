import './App.css';
import { Routes, Route } from 'react-router-dom';

import Avia from './components/Avia';
import Info from './components/Info';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="avia" element={<Avia />} />
          <Route path="avia/info" element={<Info />} />
        </Routes>
      </div>
  );
}

export default App;