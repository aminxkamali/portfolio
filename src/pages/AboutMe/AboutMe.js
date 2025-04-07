import React, { useState } from 'react';
import './AboutMe.css';
import SideBar from '../HomePage/SideBar/SideBar';
import profileImage from '../../photos/profile.jpg';
import CV from '../../files/CV.pdf';

function AboutMe() {
    const [darkMode, setDarkMode] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [imageModalOpen, setImageModalOpen] = useState(false); // State جدید برای مدیریت modal عکس

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    const handleImageClick = () => {
        setImageModalOpen(true);
    };

    const handleCloseImageModal = () => {
        setImageModalOpen(false);
    };

    return (
        <div className={`container ${darkMode ? 'dark' : 'light'}`}>
            <div className='Header'>
                {/* ... کدهای هدر بدون تغییر ... */}
            </div>

            <div className='Body'>
                {/* Overlay برای سایدبار */}
                {sidebarOpen && <div className="overlay" onClick={handleCloseSidebar}></div>}
                
                {/* Overlay برای عکس (زمانی که modal باز است) */}
                {imageModalOpen && (
                    <div className="image-modal-overlay" onClick={handleCloseImageModal}>
                        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                            <img 
                                src={profileImage} 
                                alt="Profile" 
                                className="enlarged-profile-img"
                            />
                            <button 
                                className="close-modal-btn"
                                onClick={handleCloseImageModal}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
                
                {/* SideBar */}
                <div className={`SideBar ${sidebarOpen ? 'open' : ''}`}>
                    <SideBar darkMode={darkMode}/>
                </div>
                
                <div className='Content'>
                    <div className='AboutMe-Container'>
                        <div className='AboutMe-Picture'>
                            <img
                                src={profileImage}
                                alt="AboutMe Profile"
                                className="AboutMe-profile-img"
                                onClick={handleImageClick} // اضافه کردن هندلر کلیک
                                style={{ cursor: 'pointer' }} // تغییر cursor به pointer برای نشان دادن قابلیت کلیک
                            />
                        </div>
                        <div className='AboutMe-Info'>
                        <ul className='AboutMe-Info-Description'>
                                <li className='Info-Name'>I am <span className='Info-Name-FullName'>Mohammad Amin Kamali</span></li>
                                <li >I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</li>
                                <li className='Info-moreInfo'><span className='Info-moreInfo-title'>Full name : </span>Mohammad Amin Kamali</li>
                                <li className='Info-moreInfo'><span className='Info-moreInfo-title'>age : </span>25</li>
                                <li className='Info-moreInfo'><span className='Info-moreInfo-title'>Nationality : </span>persian</li>
                                <li className='Info-moreInfo'><span className='Info-moreInfo-title'>Languages : </span>Persian, English</li>
                                <li className='Info-moreInfo'><span className='Info-moreInfo-title'>Address : </span>Tehran, Iran</li>
                                <li className='Info-moreInfo'><span className='Info-moreInfo-title'>Work area : </span>front-end developer</li>
                                <li className='Info-moreInfo'><span className='Info-moreInfo-title'>Level of education : </span>Master's degree, Bu-Ali Sina University</li>                         
                                <li><span className='Info-moreInfo-title'>status : </span><strong className='availability'>open to work</strong></li>
                                <li>
                                <a href={CV} download="Mohammad_Amin_Kamali_CV.pdf">
                                    <button className='Resume-Downloader-button'>
                                        Download CV
                                    </button>
                                </a>    
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;