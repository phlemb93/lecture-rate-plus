import { useNavigate } from 'react-router-dom'
import { useIsOpenContext } from '../utilities/IsOpenContext';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useUserContext } from '../utilities/UserContext';


function BurgerMenu() {

    const { user, dispatch } = useUserContext();
    const { isBurgerOpen, closeBurgerMenu } = useIsOpenContext();
    const navigate = useNavigate();


    const handleProfile = (e) => {

    const id = user.studentId || user.staffId;

       closeBurgerMenu();
       navigate(`/profile/${id}`)
    }
    const handleRating = (e) => {
       closeBurgerMenu();
       navigate('/review')
    }
    const handleAbout = (e) => {
       closeBurgerMenu();
       navigate('/about')
    }
    const handleRegister = (e) => {
       closeBurgerMenu();
       navigate('/register')
    }
    const handleLogin = (e) => {
       closeBurgerMenu();
       navigate('/login')
    }

    const handleLogout = () => {
        closeBurgerMenu();
        dispatch({type: 'logout'});
        localStorage.removeItem('user');
        navigate('/')
    }

  return (
        <main 
            className="burger-menu" 
            style={{ transform: isBurgerOpen ? 'translateX(0%)' : 'translateX(-100%)'}}>

            <div className="header">
                <div className="logo">
                    <h4>LectureRate<span>+</span></h4>
                </div>
                <div className="user" onClick={handleProfile} style={{display: user ? 'flex' : 'none'}}>
                    <PersonIcon 
                        style={{fontSize: 30, cursor: 'pointer', color: '#320900'}}
                     />
                </div>
            </div>

            <div className="content">
                <div className="not-active">
                    <div onClick={handleAbout}>
                        <InfoIcon style={{fontSize: 20}} />
                        <p>About</p>
                    </div>

                    <div onClick={handleRegister} style={{display: user ? 'none' : 'flex'}}>
                        <AppRegistrationIcon style={{fontSize: 20}} />
                        <p>Sign Up</p>
                    </div>

                    <div onClick={handleLogin} style={{display: user ? 'none' : 'flex'}}>
                        <LoginIcon style={{fontSize: 20}} />
                        <p>Login</p>
                    </div>
                </div>

                <div className="active" style={{display: user ? 'flex' : 'none'}}>
                    <div onClick={handleRating} style={{display: user && user.studentId ? 'flex' : 'none'}}>
                        <ReviewsIcon style={{fontSize: 20}} />
                        <p>Provide a Feedback</p>
                    </div>

                    <div onClick={handleLogout}>
                        <LogoutIcon style={{fontSize: 20}} />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
            
        </main>
  )
}

export default BurgerMenu