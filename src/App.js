import logo from './logo.svg';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Discover from './pages/discover/Discover';
import Distribute from './pages/distribute/Distribute';
import Profile from './pages/profile/Profile';
import PoolInfo from './pages/poolInfo/PoolInfo';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="discover">
          <Route index element={<Discover />} />
          <Route path=":pool_id" element={<PoolInfo />} />
        </Route>
        <Route path="/distribute" element={<Distribute />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
