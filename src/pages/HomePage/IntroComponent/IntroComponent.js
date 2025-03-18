import React from 'react';
import './IntroComponent.css';
function IntroComponent({ darkMode }) {
    return (
        <div
            className={`intro-container ${darkMode ? 'dark' : 'light'}`}
            // style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <p>
                Hi, I am <span className="highlight-name">Mohammad Amin Kamali</span><br />
                I am a frontend web developer. I can provide clean code and pixel perfect design.
                I also make website more & more interactive with web animations.
            </p>
        </div>
    );
}

export default IntroComponent;
