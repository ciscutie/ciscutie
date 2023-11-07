import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavRoutes from './Routes';
import Navbar from '../src/Components/Navbar'


function App() {
  return (
    <div className='mx-0 md:mx-1'>
      <Router>
       <Navbar />
        <NavRoutes />
      </Router>
    </div>
  );
}

export default App;
