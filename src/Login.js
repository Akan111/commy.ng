import { auth } from './firebase';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import {amazonLogo2} from './assets/images';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        // some fancy firebase stuff here....
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // some fancy firebase register stuff here....
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // means it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
                console.log(auth);
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={amazonLogo2} alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="login__signInButton" onClick={signIn} >Sign In</button>
                </form>

                <p>
                    By signing in, you agree to commy.NG's condition of use and sale.
                    Please see our privacy notice, our cookies notice and our
                    interest-based Ads.
                </p>

                <button type="submit" className="login__registerButton" onClick={register}>Create your Commy.NG account</button>
            </div>
        </div>
    )
}

export default Login
