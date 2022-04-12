import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../page/Home';

export const RouterApp = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes> <Route path='/' element={<Home/>}/> </Routes>
      </div>
    </Router>
  );
};
