import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ConfirmEmail from './components/ConfirmEmail';
import StudentProfile from './pages/StudentProfile';
import StaffRatings from './pages/StaffRatings';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Review from './pages/Review';
import ResetPassword from './pages/ResetPassword';
import BurgerMenu from './components/BurgerMenu';
import Overlay from './components/Overlay';
import { useUserContext } from './utilities/UserContext';
import Success from './components/Success';
import Ratings from './pages/Ratings';
import Rating from './pages/Rating';
import StaffProfile from './pages/StaffProfile';



const App = () => {

  const { user } = useUserContext();

  return (
    <div className="App">
      <Overlay />
      <Success />
      <ConfirmEmail /> 
      <BurgerMenu />
      <NavBar />
      <Routes>
        <Route path='/' element={ user ? <Ratings /> : <Home /> } />
        <Route path='/login' element={ user ? <Ratings /> : <Login /> } />
        <Route path='/register' element={ user ? <Ratings /> : <Register /> } />
        <Route path='/review' element={ user ? ( user.studentId ? <Review /> : <Ratings /> ) : <Login />} />
        <Route path='/ratings' element={ user ? <Ratings /> : <Home />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/reset-password' element={ <ResetPassword /> } />
        <Route path='/ratings/:id' element={ user ? <Rating /> : <Home />} />
        <Route path='/staffs/:id' element={ user ? <StaffRatings /> : <Login /> } />
        <Route path='/profile/:id' element={ user ? ( user.studentId ? <StudentProfile /> : <StaffProfile /> ): <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
