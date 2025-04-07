import './SideBar.css'
import profileImage from '../../../photos/profile.jpg'
import { Link } from 'react-router-dom'; // اضافه کردن این خط

function SideBar({darkMode}){
    return(
    <>
        <div className="sidebar-container">
            <div className="sidebar-profile">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="sidebar-profile-img"
                >
                </img>
            </div>
            <div className="custom-divider"/>
            <div className="sidebar-menu">
                <ul>
                    <li><button><Link to="/">HOME</Link></button></li>
                    <li><button><Link to="/AboutMe">ABOUT</Link></button></li>
                    <li><button><Link to="/ResumePage">RESUME</Link></button></li>
                    <li><button><a href="#projects">PROJECTS</a></button></li>
                    <li><button><a href="#contact">CONTACT</a></button></li>
                </ul>
            </div>
            <div className="custom-divider"/>
            <footer className='sidebar-footer'>
                <h1>© 2025 <strong> M. A. Kamali</strong></h1>
            </footer>
        </div>
    </>
    );
}
export default SideBar;