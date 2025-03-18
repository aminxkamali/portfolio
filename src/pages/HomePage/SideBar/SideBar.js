import './SideBar.css'
import profileImage from '../../../photos/profile.jpg'
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
                    <li><button><a href="#home">HOME</a></button></li>
                    <li><button><a href="#about">ABOUT</a></button></li>
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