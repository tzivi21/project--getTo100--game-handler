import React from 'react'
import { useState } from 'react';
import styles from './LogIn.module.css';

function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [log_in_error, setLog_in_error] = useState('');

    const handleLogin = () => {
        const currentUser = JSON.parse(localStorage.getItem(email));
        if (currentUser == null || currentUser.password != password) {
            setLog_in_error("error log in try again");
        }
        else {
            let checkPlaying = props.players.some((p) =>  p.email === currentUser.email );
            if (checkPlaying) {
                setLog_in_error("error log in try again");
            }
            else {
                props.setFlagLogIn(false);
                setLog_in_error('');
                props.setPlayers([...props.players, currentUser]);
            }
        }
    };
    return (
        <div className={styles.loginContainer}>
            <h1>Login</h1>
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
            <p id="log_in_error" className={styles.logInError}>{log_in_error}</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LogIn
