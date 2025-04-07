import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.js';
import AboutMe from './pages/AboutMe/AboutMe.js';
import ResumePage from './pages/Resume/ResumePage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path='/ResumePage' element={<ResumePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;