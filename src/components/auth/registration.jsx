import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleRegistration = () => {
        //apply the registration logic here
        history.push('/home')
    }; 

    return (
        <div>
            <h2>Register</h2>
            <input type="text" name="Email" id="Email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><br />
            <input type="Password" name="Password" id="Password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/><br />
            <button onClick={handleRegistration}>Register</button>
            <p>
                Already have an account? <Link to="/">Login Here!</Link>
            </p>
        </div>
    )
}

export default Register;
