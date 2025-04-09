import React, { useState } from 'react';
import './Contact.css';
import SideBar from '../HomePage/SideBar/SideBar';
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
                <div className="ContactPage-header">
                    <img
                        src="https://img.icons8.com/?size=100&id=AfM2kzPzTz6Q&format=png&color=000000"
                        alt="ContactPage Icon"
                        className="ContactPage-header-icon"
                    />
                    <span>Mohammad Amin Kamali <strong>ContactPage</strong></span>
                </div>

                <div className='header-right'>
                    <div className='hamburger-icon' onClick={handleToggleSidebar}>
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/25/menu--v1.png" alt="menu" />
                    </div>
                    <div className='ContactPage-darkmode' onClick={handleToggleDarkMode}>
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
                    <div className='Content-body'>
                        <div className='Content-header'>
                            <h1>CONTACT ME</h1>
                        </div>
                        <div className='Content-body-text'>
                            <div className='Contact-body-text-form'>
                                <form>
                                    <div className='Contact-body-text-form-inputs'>
                                        <input type="text" placeholder='Name' />
                                        <input type="email" placeholder='Email' />
                                        <input type="subject" placeholder='subject' />
                                    </div>
                                    <textarea placeholder='Message' rows={10} />
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                            <div className='Contact-body-text-social'>
                                <span>Follow me on:</span>
                                <span>Follow me on:</span>
                                <span>Follow me on:</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
