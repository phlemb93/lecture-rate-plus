import { useNavigate } from 'react-router-dom'
import { useIsOpenContext } from '../utilities/IsOpenContext';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ReviewsIcon from '@mui/icons-material/Reviews';


function BurgerMenu() {

    const { isBurgerOpen, closeBurgerMenu } = useIsOpenContext();
    const navigate = useNavigate();

    const handleProfile = (e) => {
       closeBurgerMenu();
       navigate('/students/1')
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
                <div className="user" onClick={handleProfile}>
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

                    <div onClick={handleRegister}>
                        <AppRegistrationIcon style={{fontSize: 20}} />
                        <p>Sign Up</p>
                    </div>

                    <div onClick={handleLogin}>
                        <LoginIcon style={{fontSize: 20}} />
                        <p>Login</p>
                    </div>
                </div>

                <div className="active">
                    <div onClick={handleRating}>
                        <ReviewsIcon style={{fontSize: 20}} />
                        <p>Ratings</p>
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