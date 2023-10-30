import React from 'react';
import Logo from '../images/Logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    const Menu = () => {
        return (
            <div className="logo">
                <img src={Logo} alt="logo of nutrition app"/>
                <div>
                    <label className="text-big">Nutrition Application</label>
                    <Link to="/" className="text-small">Home</Link>
                    <Link to="/mealPlans" className="text-small">Meal Plans</Link>
                    <Link to="/about" className="text-small">About</Link>
                    <Link to="/profile" className="text-small">Profile</Link>
                </div>
            </div>
        );
    };
    return (
        <div className="header">
            <Menu/>
        </div>
    );
};

export default Header;
