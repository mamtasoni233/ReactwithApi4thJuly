import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const navigate = useNavigate();
  // const API_BASE_URL = 'http://192.168.3.190:59236/';
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formError, setFormError] = useState({
    email: '',
    password: ''
  });
  const onInputChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
    // validationsErrors(e);
    let oldData = { ...formData };
    let inputName = e.target.name;
    let inputValue = e.target.value.trim();
    oldData[inputName] = inputValue;
    setFormData(oldData);
    setFormError(validationsErrors(oldData));
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const validationsErrors = (values) => {
    const errors = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!regex.test(values.email)) {
      errors.email = 'Please enter valid Email address.';
    }
    if (!values.password) {
      errors.password = 'Password is required.';
    }
    return errors;
  };

  useEffect(() => {
    if (
      localStorage.getItem('token') !== '' &&
      localStorage.getItem('token') != null
    ) {
      navigate('/dashboard');
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("r.data.data");

    // setFormError(validationsErrors(formData));
    let err = validationsErrors(formData);
    setFormError(err);
    let payload = {
      email: formData.email,
      password: formData.password,
    };
    if (Object.keys(err).length === 0) {
      try {
        await axios
          .post('http://192.168.3.190:59236/Auth/login', payload)
          .then((r) => {
            // console.log(r.data.data);
            localStorage.setItem('token', r.data.data.api_token);
            localStorage.setItem('user', JSON.stringify(r.data.data.oUser));
            if (r.data.data.oUser.email !== formData.email) {
              toast.error('Invalid credentials');
            } else {
              toast.success(
                'Welcome ' +
                r.data.data.oUser.name +
                ' ' +
                r.data.data.oUser.surname
              );
              navigate('/dashboard');
            }
          })
          .catch((e) => {
            // console.log('e', e);
            toast.error('Email and Password are invalid');
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
            <h1 className="text-3xl font-bold mb-8 text-center">Login Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 min-h-20 sm:h-100%">
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
                <p className="text-red-600">{formError.email}</p>
              </div>
              <div className="mb-4 min-h-20 relative sm:h-100%">
                <label
                  className="block font-semibold text-gray-700 mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={onInputChange}
                  onBlur={validationsErrors}
                />
                <span
                  className="absolute top-[39%] right-3 text-black-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
                <div className="flex flex-wrap justify-between ">
                  <p className="text-red-600 ">{formError.password}</p>
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
                  Login
                </button>
              </div>
              <div className="mt-4 flex items-center w-full text-center">
                <p className="text-s text-gray-500 capitalize text-center w-full">
                  Don&apos;t have any account yet?
                  <Link to="/register">
                    {' '}
                    <span className="text-blue-700"> Sign Up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div >
      </div >
    </>
  );
}
