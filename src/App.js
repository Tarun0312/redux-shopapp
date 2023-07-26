import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='w-full min-h-full'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/cart' element={<CartPage />} ></Route>
      </Routes>
      <Toaster />
    </div>

  );
}

export default App;
