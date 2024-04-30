import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import "./index.css";
import toast from "react-hot-toast";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      toast.error("Please log out first before signing in again");
      navigate("/LandingPage");
    }
  }, []);

  const showAlert = () => {
    alert("Please Login First");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleClick = () => {
    setClick(!click);
  };

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const activeStyle = {
    borderBottom: "2px solid white",
  };

  return (
    <div>
      {" "}
      <nav>
        <div className="nav flex bg-gradient-to-r from-gray-800 to-gray-700 fixed top-0 w-full justify-between h-10vh z-50 text-white px-20 py-8 flex-1 ">
          <div className="my-2 lg:flex md:flex lg: flex-1 items-center justify-start font-normal hidden">
            <div className="flex-10 font-poppins">
              <ul className="flex gap-12 mr-16  text-[18px]">
                <Link
                  className="link"
                  style={isActive("/") ? activeStyle : null}
                  spy={true}
                  smooth={true}
                  onClick={() => navigate("/")}
                >
                  <li className="font-poppins  font-base text-lg transition border-b-2 border-transparent hover:border-white cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    e.preventDefault();
                    showAlert();
                    navigateToLogin();
                  }}
                >
                  <li className="font-poppins font-base text-lg transition border-b-2 border-transparent hover:border-white cursor-pointer">
                    Figures
                  </li>
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    e.preventDefault();
                    showAlert();
                    navigateToLogin();
                  }}
                >
                  <li className="font-poppins font-base text-lg transition border-b-2 border-transparent hover:border-white cursor-pointer">
                    Cards
                  </li>
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    e.preventDefault();
                    showAlert();
                    navigateToLogin();
                  }}
                >
                  <li className="font-poppins font-base text-lg transition border-b-2 border-transparent hover:border-white cursor-pointer">
                    Series
                  </li>
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    e.preventDefault();
                    showAlert();
                    navigateToLogin();
                  }}
                >
                  <li className="font-poppins font-base text-lg transition border-b-2 border-transparent hover:border-white cursor-pointer">
                    Games
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex items-center mr-10">
            <div className="">
              <button
                className="bg-white text-gray-800   py-3 mr-3 px-8 font-medium inline-block hover:bg-transparent hover:border-white hover:text-white duration-300 hover:border border border-white"
                onClick={() => navigate("/Login")}
              >
                Sign In
              </button>
              <button
                className="bg-transparent text-white  py-3  px-8 font-medium inline-block hover:bg-transparent hover:bg-white hover:text-gray-800 duration-300 hover:border border border-white "
                onClick={() => navigate("/Register")}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div>{click && content}</div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
      <div className="justify-center flex mt-48">
        <img src="./src/assets/amiibo-lineup-img.avif" alt="" />
      </div>
      <div class="text-center font-bold text-slate-700 font-poppins text-5xl mt-20">
        <h2>Welcome to amiibo Web</h2>
        <p class="font-thin text-xl mt-5  tracking-wide max-w-4xl mx-auto">
          Various things about amiibo, such as additional characters, series, or
          other facilities in compatible games. Sign In first by clicking sign
          in on top corner or click{" "}
          <span
            className="italic underline cursor-pointer"
            onClick={() => navigate("/Login")}
          >
            here
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
