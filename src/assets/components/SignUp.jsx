import React from 'react'
import { useState } from 'react'
import styles from './SignUp.module.css'
function SignUp(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [sign_up_error, setSign_up_error] = useState('');

    const handleSignup = () => {
        const newUser = {
            email: email,
            password: password,
            userName: username,
            scores: [],
            average:9999
        };
        let checkUser = JSON.parse(localStorage.getItem(email));
        if (checkUser == null) {
            localStorage.setItem(email, JSON.stringify(newUser));
            props.setPlayers([...props.players,newUser]);
            props.setFlagSignUp(false);
        }
        else {
            setSign_up_error("error in sign up please try again");
        }

    };

    return (
        <div className={styles.signUpContainer}>
            <h1>Sign Up</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <p id="sign_up_error" className={styles.signUpError}>{sign_up_error}</p>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    )
}

export default SignUp
