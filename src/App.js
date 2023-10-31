import HomePage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Reserve from './components/reserve/Reserve';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <HomePage />
        <Routes>
            <Route path='/reserve' element={<Reserve />} />
        </Routes>
    </Router>
  );
}

export default App;
