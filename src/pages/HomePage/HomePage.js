import React, { useState } from 'react';
import './HomePage.css';
import IntroComponent from './IntroComponent/IntroComponent';
import SideBar from './SideBar/SideBar';
function HomePage() {
    const [darkMode, setDarkMode] = useState(true); // پیش‌فرض: دارک مود
    const [sidebarOpen, setSidebarOpen] = useState(false); // باز/بسته بودن سایدبار

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className={`container ${darkMode ? 'dark' : 'light'}`}>
            <div className='Header'>
                <div className="portfolio-header">
                    <img
                        src="https://img.icons8.com/?size=100&id=AfM2kzPzTz6Q&format=png&color=000000"
                        alt="Portfolio Icon"
                        className="portfolio-header-icon"
                    />
                    <span>Mohammad Amin Kamali <strong>Portfolio</strong></span>
                </div>

                <div className='header-right'>
                    <div className='hamburger-icon' onClick={handleToggleSidebar}>
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/25/menu--v1.png" alt="menu" />
                    </div>
                    <div className='portfolio-darkmode' onClick={handleToggleDarkMode}>
                        <div className={`darkmode-toggle ${darkMode ? 'dark' : 'light'}`}>
                            {darkMode ? (
                                <img width="25" height="25" src="https://img.icons8.com/ios/25/crescent-moon.png" alt="crescent-moon" />
                            ) : (
                                <img width="25" height="25" src="https://img.icons8.com/ios/25/sun--v1.png" alt="sun" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='Body'>
                {/* Fade Background */}
                {sidebarOpen && <div className="overlay" onClick={handleCloseSidebar}></div>}
                            
                {/* SideBar */}
                <div className={`SideBar ${sidebarOpen ? 'open' : ''}`}>
                    <SideBar darkMode={darkMode}/>
                </div>

                <div className='Content'>
                    <IntroComponent darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
