// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SpaceInvader from './components/SpaceInvader/spaceInvader';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planette" element={<SpaceInvader spaceSize={{ width: 256, height: 256 }} ></SpaceInvader>} />
        <Route path="/spaceinvader" element={<SpaceInvader spaceSize={{ width: 500, height: 500 }} />} />
      </Routes>
    </>
  );
};

export default App;