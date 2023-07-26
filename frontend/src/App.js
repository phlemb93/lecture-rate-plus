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

const App = () => {
  return (
    <div className="App">
      <ConfirmEmail /> 
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/student/:id' element={ <StudentProfile /> } />
        <Route path='/staff/:id' element={ <StaffProfile /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
