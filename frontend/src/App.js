import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ConfirmEmail from './components/ConfirmEmail';
import StudentProfile from './pages/StudentProfile';
import StaffProfile from './pages/StaffProfile';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Review from './pages/Review';
import ResetPassword from './pages/ResetPassword';
import BurgerMenu from './components/BurgerMenu';
import Overlay from './components/Overlay';
import { useUserContext } from './utilities/UserContext';

const App = () => {

  const { user } = useUserContext();

  return (
    <div className="App">
      <Overlay />
      <ConfirmEmail /> 
      <BurgerMenu />
      <NavBar />
      <Routes>
        <Route path='/' element={ user ? <Review /> : <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/review' element={ user ? <Review /> : <Login />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/reset-password' element={ <ResetPassword /> } />
        <Route path='/students/:id' element={ user ? <StudentProfile /> : <Login />} />
        <Route path='/staffs/:id' element={ user ? <StaffProfile /> : <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
