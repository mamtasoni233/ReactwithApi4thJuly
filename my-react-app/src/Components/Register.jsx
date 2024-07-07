import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

export default function Register() {
  const navigate = useNavigate();
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
  const [isSubmit, setIsSubmit] = useState(false);
  const onInputChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    // let oldData = { ...formData };
    // let inputName = e.target.name;
    // let inputValue = e.target.value;
    // oldData[inputName] = inputValue;
    // setFormData(oldData);
    // const { name, value } = e.target;
    // setFormData({
    //     ...formData,
    //     [name]: value
    // });
    // if (error[name]) {
    //     setFormError({
    //         ...error,
    //         [name]: ''
    //     });
    // }
    // validateInput(e);
  };
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit === true) {
      console.log(formData);
      setIsSubmit(true);
    }
  }, [formError]);

  const validationsErrors = (values) => {
    const errors = {};
    const regex = '\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]+\b';

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    // if (!values.password) {
    //   errors.username = 'Password is required';

    // }
    if (!values.password) {
      errors.password = 'Please enter Password.';
    } else if (
      values.confirmPassword &&
      values.confirmPassword !== values.password
    ) {
      errors.confirmPassword = 'Password and Confirm Password does not match.';
    } else {
      errors.confirmPassword = values.confirmPassword
        ? ''
        : errors.confirmPassword;
    }
    return errors;
  };
  /*  const validateInput = (e) => {
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
  }; */
  const handleRegister = (e) => {
    e.preventDefault();
    setFormError(validationsErrors(formData));
    // const validationsErrors = {};
    /* let errors = {};
    let hasErrors = false;
    
    for (const key in input) {
        console.log(input)
        if (input[key].trim() === '') {
            errors = {
                    ...errors,
                    [key]: 'This field is required.'
                };
                hasErrors = true;
            }
        }

        if (hasErrors) {
            setFormError(errors);
        } else {
            console.log("Form submitted:", formData);
        } */
    let payload = {
      username: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };
    if (setIsSubmit) {
      try {
        axios
          .post('http://127.0.0.1:59236/Auth/register', payload)
          .then((r) => {
            console.log('r', r);
            // localStorage.setItem('token', r.data.data.api_token);
            // localStorage.setItem('user', JSON.stringify(r.data.data.oUser));
            // // toast.success('Welcome ' + r.data.data.oUser.name + ' ' + r.data.data.oUser.surname);
            // if (r.data.length !== '') {
            //   toast.success('You are succefully Registered');
            //   navigate('/');
            // } else {
            //   toast.error('Invalid credentials');
            // }
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (error) {
        console.error('Error logging in:', error);
        toast.error('An error occurred');
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
            <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
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
                  //   onBlur={validateInput}
                />
                {/* {formError.firstName && (
                  <span className="text-red-600">{formError.firstName}</span>
                )} */}
                <p>{formError.firstName}</p>
              </div>
              <div className="mb-4">
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
                  //   onBlur={validateInput}
                />
                {/* {formError.lastName && (
                  <span className="text-red-600">{formError.lastName}</span>
                )} */}
                <p>{formError.lastName}</p>
              </div>
              <div className="mb-4">
                <label
                  className="block font-semibold text-gray-700 mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="text"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={onInputChange}
                  //   onBlur={validateInput}
                />
                {/* {formError.email && (
                  <span className="text-red-600">{formError.email}</span>
                )} */}
                <p>{formError.email}</p>
              </div>
              <div className="mb-4">
                <label
                  className="block font-semibold text-gray-700 mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={onInputChange}
                  //   onBlur={validateInput}
                />
                {/* {formError.password && (
                  <span className="text-red-600">{formError.password}</span>
                )} */}
                <p>{formError.password}</p>
              </div>
              <div className="mb-4">
                <label
                  className="block font-semibold text-gray-700 mb-2"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.confirmPassword}
                  onChange={onInputChange}
                  //   onBlur={validateInput}
                />
                {/* {formError.confirmPassword && (
                  <span className="text-red-600">
                    {formError.confirmPassword}
                  </span>
                )} */}
                <p>{formError.confirmPassword}</p>
                <div className="flex justify-end">
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
          </div>
        </div>
      </div>
    </>
  );
}
