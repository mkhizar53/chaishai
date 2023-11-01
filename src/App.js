import HomePage from './components/homepage/Homepage'
import Navbar from './components/navbar/Navbar';
import Reserve from './components/reserve/Reserve';
import About from './components/about/About'
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/reserve' element={ <Reserve /> } />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
