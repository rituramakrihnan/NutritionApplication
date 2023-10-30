import React, { useEffect, useState } from 'react';
import Meal from './components/Meal';
import Header from './components/Header';
import Footer from './components/Footer';
import backgroundImage from './images/Backrground.jpg';
import RituImage from './images/Ritu.jpg';
import VanessaImage from './images/Vanessa.jpg';
import AlexaImage from './images/Alexa.jpg';
import Comp227 from './images/COMP227.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loginService from './services/login';
import mealService from './services/meals';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification';

const background = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

const About = () => (
    <div>
        <h1>About Our Nutrition Application</h1>
        <div className="description">
            <p>Welcome to our one-stop-shop for healthy meal inspiration! With our curated
                selection of meals, you can easily find and favorite recipes that fit your dietary needs and
                preferences.</p>
            <p>This website is intended to allow users to view and favorite various healthy meals that they would like to cook and eat for a healthier lifestyle. Here you can find various different meals that have information listed such as cook time, calories, and ingredients all in one convenient place and sort/filter the selection as you like.</p>
        </div>
        <div className="developers-section">
            <h2>Developers</h2>
            <div className="developer">
                <img src={AlexaImage} alt="Alexa" />
                <div className="developer-info">
                    <h3>Alexa</h3>
                    <p>COMP 227 Web Development Student</p>
                </div>
            </div>
            <div className="developer">
                <img src={RituImage} alt="Ritu" />
                <div className="developer-info">
                    <h3>Ritu</h3>
                    <p>COMP 227 Web Development Student</p>
                </div>
            </div>
            <div className="developer">
                <img src={VanessaImage} alt="Vanessa" />
                <div className="developer-info">
                    <h3>Vanessa</h3>
                    <p>COMP 227 Web Development Student</p>
                </div>
            </div>
        </div>
        <div className="developers-section">
            <h2>Mentor</h2>
            <div className="developer">
                <img src={Comp227} alt="Comp227" />
                <div className="developer-info">
                    <h3>Osvaldo Jimenez</h3>
                    <p>COMP 227 Web Development Professor</p>
                </div>
            </div>
        </div>
    </div>
);

const Home = () => (
    <div className="home-container">
        <h1 className="home-title"> Welcome Home! </h1>
        <div className="home-description">
            <p> Welcome to our Nutrition Application!
                Our goal is to help you find and favorite healthy meal options that fit your dietary needs and preferences.
                Browse through our curated selection of meals and discover new recipes to add to your meal planning.
                With information such as cook time, calories, and ingredients listed all in one convenient place,
                you can easily sort and filter the selection as you like.
                We hope you enjoy using our application and find it helpful on your journey towards a healthier lifestyle!</p>
        </div>
    </div>
);



const App = () => {
    const Profile = () => {
        const [user, setUser] = useState(null);
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [notification, setNotification] = useState(null);

        useEffect(() => {
            const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
            if (loggedUser) {
                setUser(loggedUser);
                mealService.setToken(loggedUser.token);
            }
        }, []);
        const handleLogin = async event => {
            event.preventDefault();
            try {
                const user = await loginService.login({ username, password });
                setUser(user);
                window.localStorage.setItem('loggedUser', JSON.stringify(user));
                setUsername('');
                setPassword('');
                mealService.setToken(user.token);
                console.log('User has logged in Successfully');
            } catch (exception) {
                setNotification({
                    text: 'wrong username or password',
                    type: 'error',
                });
                console.error('Wrong Credentials (either incorrect username or password)', exception);
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            }
        };

        const handleLogout = () => {
            window.localStorage.removeItem('loggedUser');
            setUser(null);
        };

        if(user !== null){
            return(
                <div>
                    <p>{user.name} logged in {' '}
                        <button type="button" onClick={handleLogout}>logout</button>
                    </p>
                    <br/>
                </div>
            );
        }
        else{
            return(
                <div>
                    <Notification message={notification}/>
                    <LoginForm
                        username={username}
                        password={password}
                        handleUsernameChange={({ target }) => setUsername(target.value)}
                        handlePasswordChange={({ target }) => setPassword(target.value)}
                        handleSubmit={handleLogin}
                    />
                </div>
            );
        }
    };


    return (
        <BrowserRouter>
            <div>
                <div style={background}>
                    <div>
                        <Header />
                    </div>
                    <br/>
                    <Routes>
                        <Route path ="/" element={<Home />} />
                        <Route path="/mealPlans" element={<Meal/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/profile" element={<Profile /> } />
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;