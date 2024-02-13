import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = ({name, email, password, result, signupUser, setName, setEmail, setPassword}) => {

    return (
        <>
            <h1 className='result'>{result}</h1>
            <form className='signup form' onSubmit={signupUser}>
                <h1>SIGN UP</h1>
                <label htmlFor="name" className='emailLabel' >FULL NAME </label> <br />
                <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} className='inputFields' /> <br />
                <label htmlFor="email" className='emailLabel'  >E-MAIL </label> <br />
                <input type="email" name="email" placeholder='Enter valid email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputFields' /> <br />
                <label htmlFor="password" className='passwordLabel' > PASSWORD: </label> <br />
                <input type="password" name="password" placeholder='Enter valid password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputFields' /> <br />
                <button className='btn' type='submit'>SIGN-UP</button> <br />
                <Link to='/' className='redirectLink'> Registered before? Login</Link>
            </form>
        </>
    )
}

export default SignUpForm;