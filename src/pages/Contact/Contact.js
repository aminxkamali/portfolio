import React, { useState } from 'react';
import './Contact.css';
import SideBar from '../HomePage/SideBar/SideBar';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
function HomePage() {

    const [darkMode, setDarkMode] = useState(true); // پیش‌فرض: دارک مود
    const [sidebarOpen, setSidebarOpen] = useState(false); // باز/بسته بودن سایدبار
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
    console.log(data);
      // در اینجا می‌توانید منطق ارسال فرم را اضافه کنید
    };
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
                                <form onSubmit={handleSubmit(onSubmit)} style={{ color: 'white' , width: '100%'}}>
                                    <Typography variant="h6" gutterBottom style={{ color: 'white' ,textAlign: 'left' ,width: '75%'}}>
                                        Get In Touch
                                    </Typography>
                                    <Box sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        gap:4 ,
                                        width: '75%',
                                        margin: '0',
                                        '& .MuiTextField-root': {
                                            width: '100%'
                                        },
                                        '& .MuiButton-root': {
                                            width: 'auto',
                                            alignSelf: 'start',
                                        }
                                    }}>
                                        <TextField
                                            {...register("name", { required: "Name is required" })}
                                            label="Enter your name*"
                                            variant="outlined"
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            InputLabelProps={{ style: { color: '#a4acc4' } }}
                                            InputProps={{ style: { color: '#a4acc4' } }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: '#a4acc4' },
                                                '&:hover fieldset': { borderColor: '#a4acc4' }
                                                }
                                            }}
                                        />
                                        
                                        {/* بقیه فیلدها با همین استایل */}
                                        <TextField
                                            {...register("email", { 
                                                required: "Email is required",
                                                pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                                }
                                            })}
                                            label="Enter your email*"
                                            variant="outlined"
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            InputLabelProps={{ style: { color: '#a4acc4' } }}
                                            InputProps={{ style: { color: '#a4acc4' } }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: '#a4acc4' },
                                                '&:hover fieldset': { borderColor: '#a4acc4' }
                                                }
                                            }}
                                        />
                                        
                                        <TextField
                                            {...register("subject", { required: "Subject is required" })}
                                            label="Enter your subject*"
                                            variant="outlined"
                                            error={!!errors.subject}
                                            helperText={errors.subject?.message}
                                            InputLabelProps={{ style: { color: '#a4acc4' } }}
                                            InputProps={{ style: { color: '#a4acc4' } }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: '#a4acc4' },
                                                '&:hover fieldset': { borderColor: '#a4acc4' }
                                                }
                                            }}
                                        />
                                        
                                        <TextField
                                            {...register("message", { required: "Message is required" })}
                                            label="Enter your Message*"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            InputLabelProps={{ style: { color: '#a4acc4' } }}
                                            InputProps={{ style: { color: '#a4acc4' } }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                '& fieldset': { borderColor: '#a4acc4' },
                                                '&:hover fieldset': { borderColor: '#a4acc4' }
                                                }
                                            }}
                                        />
                                        
                                        <Button 
                                            type="submit" 
                                            variant="contained" 
                                            sx={{ 
                                                mt: 2,
                                                py: 1.5,
                                                backgroundColor: '#3f51b5',
                                                '&:hover': {
                                                backgroundColor: '#303f9f'
                                                }
                                            }}
                                        >
                                            SEND MAIL
                                        </Button>
                                    </Box>
                                    </form>
                            </div>
                            <div className='Contact-body-text-social'>
                                <div className="contact-info-section">
                                    <div className="contact-info-item">
                                    <h4>Phone</h4>
                                    <p>+012-3456-7891</p>
                                    <p>+012-3456-7892</p>
                                    </div>
                                    
                                    <div className="contact-info-item">
                                    <h4>Email</h4>
                                    <p>admin.sitename@example.com</p>
                                    <p>info.sitename@example.com</p>
                                    </div>
                                    
                                    <div className="contact-info-item">
                                    <h4>Address</h4>
                                    <p>121 King Street, Melbourne,</p>
                                    <p>Victoria 3000, Australia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
