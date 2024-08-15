import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { API_BASE_URL } from "../api";

const Navbar = () => {
    const {setUserInfo, userInfo} = useContext(UserContext);
    const [isMenuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    useEffect(() => {
        fetch(API_BASE_URL+"/profile", {
            credentials: "include",
        }).then((response) => {
            if (response.ok) {
                response.json().then((userInfo) => {
                    setUserInfo(userInfo);
                }).catch((err) => console.log(err))
            } else {
                setUserInfo(null);
            }
        }).catch(() => {
            setUserInfo(null);
        });
    }, [setUserInfo]);

    async function logout () {
        await fetch(API_BASE_URL+'/logout', {
            credentials: "include",
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;


    return (
        <header className="w-full h-max py-3 px-1 bg-transparent font-outfit mb-10 border-b-2 border-[#1c1f26]">
        <nav className="flex justify-between items-center w-full">
            <Link to="/" onClick={() => setMenuOpen(false)}>
            <div className="flex gap-3 items-center">
                <img src="/icy.png" alt="logo" width={32} height={32} />
                <h1 className="font-bold text-xl">Blog by Ice</h1>
            </div>
            </Link>
            <div className="hidden md:flex items-center gap-3">
            {username ? (
                <>
                <Link
                    to="/create"
                    className="px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-purple-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-purple-500 rounded-md py-1 backdrop-blur-md"
                >
                    Create new post
                </Link>
                <a  href="/"
                    onClick={logout}
                    className="px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-red-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-red-500 rounded-md py-1 backdrop-blur-md"
                >
                    Logout
                </a>
                </>
            ) : (
                <>
                <Link
                    to="/login"
                    className="px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-blue-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-blue-500 rounded-md py-1 backdrop-blur-md box-shadow-none"
                    >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-green-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-green-500 rounded-md py-1 backdrop-blur-md"
                >
                    Register
                </Link>
                </>
            )}
            </div>

            <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            >
            <svg
                className={`w-6 h-6 transition-transform transform ${
                isMenuOpen ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isMenuOpen ? (
                <>
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6"
                    ></path>
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6l12 12"
                    ></path>
                </>
                ) : (
                <>
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16"
                    ></path>
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12h16"
                    ></path>
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 18h16"
                    ></path>
                </>
                )}
            </svg>
            </button>
        </nav>

        {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center gap-3 mt-12 transition-opacity duration-300 ease-in-out">
            {username ? (
                <>
                <Link
                    to="/create"
                    // onClick={toggleMenu}
                    className="w-full text-center px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-purple-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-purple-500 rounded-md py-1 backdrop-blur-md"
                >
                    Create new post
                </Link>
                <a
                    onClick={logout}
                    href="/logout"
                    // onClick={toggleMenu}
                    className="w-full text-center px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-red-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-red-500 rounded-md py-1 backdrop-blur-md"
                >
                    Logout
                </a>
                </>
            ) : (
                <>
                <Link
                    to="/login"
                    onClick={toggleMenu}
                    className="w-full text-center px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-blue-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-blue-500 rounded-md py-1 backdrop-blur-md"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    onClick={toggleMenu}
                    className="w-full text-center px-5 cursor-pointer text-md font-medium text-zinc-500  dark:text-zinc-300 hover:text-green-400 transition-all bg-[#fff] dark:bg-[#1c1f26] border border-zinc-600/0 hover:border-green-500 rounded-md py-1 backdrop-blur-md"
                >
                    Register
                </Link>
                </>
            )}
            </div>
        )}
        </header>
    );
};

export default Navbar;
