import React from 'react';
import PropTypes from 'prop-types';
const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
        <div style={ { marginBottom: '600px', marginTop: '50px', marginLeft: '50px' } }>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username' style={{ fontWeight: 'bold', marginRight: '10px' }}>Username:</label>
                    <input
                        id='username'
                        type='text'
                        placeholder='Enter username'
                        value={username}
                        onChange={handleUsernameChange}
                        className='search-input'
                    />
                </div>
                <div>
                    <label htmlFor='password' style={{ fontWeight: 'bold', marginRight: '10px' }}>Password:</label>
                    <input
                        id='password'
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={handlePasswordChange}
                        className='search-input'
                    />
                </div>
                <button id="login-button1" type="submit">login</button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default LoginForm;