import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if ((localStorage.getItem('token') === "" || localStorage.getItem('token') === null) || (localStorage.getItem('user') === "")) {
            navigate("/");
        }
    });
    const logoutAction = () => {
        // console.log('logout api');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/");
        // toast.error('Please log in to access further.....');

    }

    return (
        <>
            {/* <!-- nav bar section --> */}
            <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
                <div className="text-xl">Bappa Flour mill</div>
                <div className="flex md:hidden">
                    <button id="hamburger">
                        <img alt="" className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                        <img alt="" className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                    </button>
                </div>
                <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
                    <Link to="/dashboard" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home
                    </Link>
                    <Link to="/service" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Services
                    </Link>
                    <Link to="/about" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us
                    </Link>
                    <Link to="/gallery" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Gallery
                    </Link>
                    <Link to="/visit-us" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Visit Us
                    </Link>
                </div>

                <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
                    <Link>
                        <div className="flex justify-end">
                            <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                                {/* <!-- Heroicon name: phone --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                Call now
                            </div>
                            <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2 mx-2">
                                <button onClick={logoutAction}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;