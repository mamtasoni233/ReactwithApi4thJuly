import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";

export default function Register() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    });
    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    });
    const onInputChange = (e) => {
        /* const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        })); */
        let oldData = { ...input };
        let inputName = e.target.name;
        let inputValue = e.target.value;
        oldData[inputName] = inputValue;
        setInput(oldData);
        validateInput(e);
    };
    const validateInput = (e) => {
        let { name, value } = e.target;
        setError((prev) => {
            const stateObj = { ...prev, [name]: '' };

            switch (name) {
                case 'email':
                    if (!value) {
                        stateObj[name] = 'Please enter email address.';
                    }
                    break;

                case 'firstName':
                    if (!value) {
                        stateObj[name] = 'Please enter first name.';
                    }
                    break;

                case 'lastName':
                    if (!value) {
                        stateObj[name] = 'Please enter last name.';
                    }
                    break;

                case 'password':
                    if (!value) {
                        stateObj[name] = 'Please enter Password.';
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj['confirmPassword'] =
                            'Password and Confirm Password does not match.';
                    } else {
                        stateObj['confirmPassword'] = input.confirmPassword
                            ? ''
                            : error.confirmPassword;
                    }
                    break;

                case 'confirmPassword':
                    if (!value) {
                        stateObj[name] = 'Please enter Confirm Password.';
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = 'Password and Confirm Password does not match.';
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        validateInput();
        let payload = {
            email: input.email,
            password: input.password,
            firstName: input.firstName,
            lastName: input.lastName
        }
        try {
            axios.post('http://192.168.3.190:59236/Auth/register', payload)
                .then((r) => {
                    console.log(r.data.data);
                    // localStorage.setItem('token', r.data.data.api_token);
                    // localStorage.setItem('user', JSON.stringify(r.data.data.oUser));
                    // // toast.success('Welcome ' + r.data.data.oUser.name + ' ' + r.data.data.oUser.surname);
                    // if (email !== r.data.data.oUser.email) {
                    //     toast.error('Invalid credentials');
                    // } else {
                    //     toast.success('Welcome ' + r.data.data.oUser.name + ' ' + r.data.data.oUser.surname);
                    //     navigate("/dashboard");
                    // }
                    navigate("/");

                })
                .catch((e) => {
                    console.log(e)
                });
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('An error occurred');
        }
    };
    return (
        <>
            <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
                <div className="h-screen flex justify-center items-center">
                    <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
                        <form onSubmit={handleRegister}>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                                    First Name
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName" name='firstName' type="text" placeholder="Enter your first name"
                                    value={input.firstName}
                                    onChange={onInputChange}
                                    onBlur={validateInput} />
                                {error.firstName && (
                                    <span className="err">{error.firstName}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                                    Last Name
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName" name='lastName' type="text" placeholder="Enter your last name"
                                    value={input.lastName}
                                    onChange={onInputChange}
                                    onBlur={validateInput} />
                                {error.lastName && (
                                    <span className="err">{error.lastName}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" name='email' type="email" placeholder="Enter your email address"
                                    value={input.email}
                                    onChange={onInputChange}
                                    onBlur={validateInput} />
                                {error.email && (
                                    <span className="err">{error.email}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" name='password' type="password" placeholder="Enter your password"
                                    value={input.password}
                                    onChange={onInputChange}
                                    onBlur={validateInput} />
                                {error.password && (
                                    <span className="err">{error.password}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                                    Confirm Password
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirmPassword"
                                    name='confirmPassword'
                                    type="password" placeholder="Enter your password"
                                    value={input.confirmPassword}
                                    onChange={onInputChange}
                                    onBlur={validateInput} />
                                {error.confirmPassword && (
                                    <span className="err">{error.confirmPassword}</span>
                                )}
                                <Link className="text-blue-400 hover:text-blue-700">Forgot your password?</Link>
                            </div>
                            <div className="mb-6">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Register
                                </button>
                            </div>
                            <div className="mt-4 flex items-center w-full text-center">
                                <p className="text-s text-gray-500 capitalize text-center w-full" >
                                    Have already an account?
                                    <Link to="/"> <span className="text-blue-700"> Login</span></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}
