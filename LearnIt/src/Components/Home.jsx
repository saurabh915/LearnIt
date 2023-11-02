import React from 'react';

const HomePage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        height: '100%',

        background: `url('https://wallpaperaccess.com/full/1196474.jpg') no-repeat center center fixed`,
        backgroundSize: '100% 100%',
    };



    const contentStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    };



    return (
        <div style={containerStyle}>
            <header>
                <h1>LearnIt</h1>
                <p>"Empowering slow learners with personalized, effective, and supportive learning solutions to unlock their full potential."</p>
            </header>

        </div>
    );
}

export default HomePage;
