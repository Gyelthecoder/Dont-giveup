import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = () => {
        //Implement logic here  
        history.push('/');
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button onClick={handleLogin}>Login</button>
            <p>
                Don't have account yet? register here<Link to="/registration">Register</Link>
            </p>
        </div>
    )
}

export default Login;