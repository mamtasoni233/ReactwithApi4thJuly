import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [message, setMessage] = useState('');
    // const API_BASE_URL = 'http://127.0.0.1:59236/';
    useEffect(() => {
        if (localStorage.getItem('token') !== "" && localStorage.getItem('token') != null) {
            navigate("/dashboard");
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            email: email,
            password: password,
        }
        try {
            axios.post('http://192.168.3.190:59236/Auth/login', payload)
                .then((r) => {
                    console.log(r.data.data);
                    localStorage.setItem('token', r.data.data.api_token);
                    localStorage.setItem('user', JSON.stringify(r.data.data.oUser));
                    // toast.success('Welcome ' + r.data.data.oUser.name + ' ' + r.data.data.oUser.surname);
                    if (r.data.data.oUser.email !== email) {
                        toast.error('Invalid credentials');
                    } else {
                        toast.success('Welcome ' + r.data.data.oUser.name + ' ' + r.data.data.oUser.surname);
                        navigate("/dashboard");
                    }

                })
                .catch((e) => {
                    console.log("e", e);
                    //  JSONArray jsonArray = (JSONArray) jsonObject.get("contact");
                    console.log("error message", e.response.data);
                    toast.error((e.response.data.messages[0]));
                });
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };
    return (
        <>
            <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
                <div className="h-screen flex justify-center items-center">
                    <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className='flex justify-end'>
                                    <Link className="text-blue-400 hover:text-blue-700">Forgot your password?</Link>
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Login
                                </button>
                            </div>
                            <div className="mt-4 flex items-center w-full text-center">
                                <p className="text-s text-gray-500 capitalize text-center w-full" >
                                    Don&apos;t have any account yet?
                                    <Link to="/register"> <span className="text-blue-700"> Sign Up</span></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                {/* {message && <p>{message}</p>} */}
            </div >
        </>
    )
}
