import React, { useContext, useState } from 'react';
import classes from './Login.module.css'
import img from '../../images/logo2.png'
import { userContex } from '../../App';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isLogin, setIsLogin] = useContext(userContex);
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInput = (e) => {
        let checkForm;
        if (e.target.name === 'name') {
            checkForm = e.target.value
        }
        if (e.target.name === 'email') {
            checkForm = /^\S+@\S+\.\S+$/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            checkForm = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value)
        }
        if (e.target.name === 'confirmPassword') {
            if (e.target.value !== input.password) {
                alert('password should be matches')
            }
            else{
                checkForm = e.target.value
                setIsLogin(true);
            }
        }
        if (checkForm) {
            const newValue = {...input}
            newValue[e.target.name] = e.target.value
            setInput(newValue);
        }
    }

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (isLogin) {
            navigate('/shipment')
        }
        else {
            alert('Please enter your details')
        }
    }
    
    return (
        <>
            <img src={img} className={classes.img} alt="" />
            <div className="form-control">
                <input name='name' type="text" placeholder='Name' onBlur={handleInput} className={`form-control ${classes.input}`}/> <br />
                <input name='email' type="text" placeholder='Email' onBlur={handleInput} className={`form-control ${classes.input}`}/> <br />
                <input name='password' type="password" placeholder='Password' onBlur={handleInput} className={`form-control ${classes.input}`}/> <br />
                <input name='confirmPassword' type="password" placeholder='Confirm Password' onBlur={handleInput} className={`form-control ${classes.input}`}/>
            </div>
            <button onClick={handleSubmit} className={`btn ${classes.btn}`}>Sign in</button>
        </>
    );
};

export default Login;