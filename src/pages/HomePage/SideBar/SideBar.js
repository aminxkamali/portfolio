import './SideBar.css'
import profileImage from '../../../photos/profile.jpg'
import { Link } from 'react-router-dom';

function SideBar({ darkMode }) {
    return (
        <>
            <div className={`sidebar-container ${darkMode ? 'dark' : 'light'}`}>
                <div className="sidebar-profile">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="sidebar-profile-img"
                    />
                </div>
                <div className="custom-divider" />
                <div className="sidebar-menu">
                    <ul>
                        <li><button className={`${darkMode ? 'dark' : 'light'}`}><Link to="/">HOME</Link></button></li>
                        <li><button className={`${darkMode ? 'dark' : 'light'}`}><Link to="/AboutMe">ABOUT</Link></button></li>
                        <li><button className={`${darkMode ? 'dark' : 'light'}`}><Link to="/ResumePage">RESUME</Link></button></li>
                        <li><button className={`${darkMode ? 'dark' : 'light'}`}><a href="#projects">PROJECTS</a></button></li>
                        <li><button className={`${darkMode ? 'dark' : 'light'}`}><a href="#contact">CONTACT</a></button></li>
                    </ul>
                </div>
                <div className="custom-divider" />
                <footer className='sidebar-footer'>
                    <h1>© 2025 <strong> M. A. Kamali</strong></h1>
                </footer>
            </div>
        </>
    );
}

export default SideBar;