import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PasswordChecklist from "react-password-checklist"

export default function Register() {
    // const API_BASE_URL = 'http://192.168.3.190:59236/';
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfrimPasswordVisible, setIsConfrimPasswordVisible] = useState(false);
    // const [isSubmit, setIsSubmit] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });
    const [formError, setFormError] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    function toggleConfrimPasswordVisibility() {
        setIsConfrimPasswordVisible((prevState) => !prevState);
    }
    const onInputChange = (e) => {
        // const { name, value } = e.target;
        /*  setFormData({
             ...formData,
             [name]: value.trim(),
         }); */
        let oldData = { ...formData };
        let inputName = e.target.name;
        let inputValue = e.target.value.trim();
        oldData[inputName] = inputValue;
        setFormData(oldData);
        setFormError(validationsErrors(oldData));
    };
    // useEffect(() => {
    //     // console.log(formError);
    //     if (Object.keys(formError).length === 0 && isSubmit) {
    //         // console.log(formData);
    //         // setIsSubmit(true);
    //     }
    // }, [formError, isSubmit]);

    const validationsErrors = (values) => {
        const errors = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        if (!values.firstName) {
            errors.firstName = 'First name is required.';
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required.';
        }
        if (!values.email) {
            errors.email = 'Email is required.';
        } else if (!regex.test(values.email)) {
            errors.email = 'Please enter valid Email address.';
        }
        if (!values.password) {
            errors.password = 'Password is required.';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Password does not match.';
        }
        return errors;
    };
    const handleRegister = (e) => {
        e.preventDefault();
        let err = validationsErrors(formData);
        setFormError(err);
        // setIsSubmit(true);
        let payload = {
            username: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
        };
        if (Object.keys(err).length === 0) {
            try {
                axios
                    .post('http://192.168.3.190:59236/Auth/register', payload)
                    .then((r) => {
                        // console.log('r', r);
                        if (r.data.data.oUser === false) {
                            toast.error('Email is already exits...');
                        } else {
                            toast.success('You are succefully Registered');
                            navigate('/');
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } catch (error) {
                console.error('Error logging in:', error);
            }
        }
    };
    return (
        <>
            <div
                className="bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
            >
                <div className="h-screen flex justify-center items-center">
                    <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 className="text-3xl font-bold mb-8 text-center">Register Form</h1>
                        <form onSubmit={handleRegister}>
                            <div className="min-h-24 sm:h-100%">
                                <label
                                    className="block font-semibold text-gray-700 mb-2"
                                    htmlFor="email"
                                >
                                    First Name
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={onInputChange}
                                    onBlur={validationsErrors}
                                />
                                <p className="text-red-600 ">{formError.firstName}</p>
                            </div>
                            <div className=" min-h-24 sm:h-100%">
                                <label
                                    className="block font-semibold text-gray-700 mb-2"
                                    htmlFor="email"
                                >
                                    Last Name
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={onInputChange}
                                    onBlur={validationsErrors}
                                />
                                <p className="text-red-600 ">{formError.lastName}</p>
                            </div>
                            <div className=" min-h-24 sm:h-100%">
                                <label
                                    className="block font-semibold text-gray-700 mb-2"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={onInputChange}
                                    onBlur={validationsErrors}
                                />
                                <p className="text-red-600 ">{formError.email}</p>
                            </div>
                            <div className="min-h-24 relative sm:h-100%">
                                <label
                                    className="block font-semibold text-gray-700 mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="relative border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    name="password"
                                    type={isPasswordVisible ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={onInputChange}
                                    onBlur={validationsErrors}
                                />
                                <span
                                    className="absolute top-[6vh] right-3 text-black-600"
                                    onClick={togglePasswordVisibility}
                                >
                                    {isPasswordVisible ? (
                                        <FontAwesomeIcon icon={faEye} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    )}
                                </span>
                                {formError.password ?
                                    <p className="text-red-600 ">{formError.password}</p> : ''
                                }
                                {formData.password !== '' ? <PasswordChecklist
                                    rules={["minLength", "specialChar", "number", "capital"]}
                                    minLength={8}
                                    value={formData.password}
                                    messages={{
                                        minLength: "Password has more than and equal to 8 characters.",
                                        specialChar: "Password ha special characters.",
                                        number: "Password has a number.",
                                        capital: "Password has a capital letter."
                                    }}
                                /> : ''}


                            </div>
                            <div className="relative min-h-28 sm:h-100%">
                                <label
                                    className="block font-semibold text-gray-700 mb-2"
                                    htmlFor="password"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={isConfrimPasswordVisible ? "text" : "password"}
                                    placeholder="Enter your confrim password"
                                    value={formData.confirmPassword}
                                    onChange={onInputChange}
                                    onBlur={validationsErrors}
                                />
                                <span
                                    className="absolute top-[34%] right-3 text-black-600"
                                    onClick={toggleConfrimPasswordVisibility}
                                >
                                    {isConfrimPasswordVisible ? (
                                        <FontAwesomeIcon icon={faEye} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    )}
                                </span>
                                <div className="flex flex-wrap justify-between">
                                    <p className="text-red-600 ">{formError.confirmPassword}</p>
                                    <Link className="text-blue-400 hover:text-blue-700">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                            <div className="mt-4 flex items-center w-full text-center">
                                <p className="text-s text-gray-500 capitalize text-center w-full">
                                    Have already an account?
                                    <Link to="/">
                                        {' '}
                                        <span className="text-blue-700"> Login</span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        </>
    );
}
