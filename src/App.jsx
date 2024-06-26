import './App.css';
import BooksDetail from './Component/Books/BooksDetail';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Registration from './Component/Registration/registration';
import ScrollToTop from './ScrollToTop';


function App() {
  const location =useLocation()


  return (
    <>

     {location.pathname !== '/register' && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bookdetails/:id' element={<BooksDetail />} />
          <Route path='/register' element={<Registration />} />
        
        </Routes>
        <ScrollToTop />
        {location.pathname !== '/register' && <Footer />}


    </>
  )
}

export default App
