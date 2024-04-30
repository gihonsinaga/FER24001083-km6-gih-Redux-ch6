import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      toast.error("Please log out first before signing up again");
      navigate("/LandingPage");
    }
  }, []);

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
        {
          email,
          name,
          password,
        }
      );

      console.log("response :", response);
      console.log("response register :", response.data);
      if (response?.status === 201) {
        toast.success("Registration successful", {
          style: {
            border: "1px solid black",
            padding: "20px",
            color: "green",
            duration: 6000,
          },
          iconTheme: {
            primary: "green",
            secondary: "white",
          },
          duration: 10000,
        });
        setEmail("");
        setName("");
        setPassword("");
        setError("");
      }
    } catch (error) {
      console.error("Registration gagal :", error);
      setError(error.response.data.message);
      toast.error("Registration failed. Please try again", {
        style: {
          border: "1px solid black",
          padding: "20px",
          color: "red",
        },
        iconTheme: {
          primary: "red",
          secondary: "white",
        },
        duration: 6000,
      });
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-gradient-to-b from-gray-500 to-gray-300 min-h-screen  ">
        <div>
          <button
            className="bg-gray-800 text-white mt-4 ml-5 rounded-3xl py-3 mb-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent"
            onClick={() => navigate("/")}
          >
            home
          </button>
        </div>
        <div className="flex items-center justify-center mt-16">
          <div className="bg-gray-100 flex shadow-xl w-[1000px] h-[700px] items-center max-lg:w-[700px] max-lg:h-[630px] max-md:w-[350px] max-md:h-[700px]">
            <div className="w-1/2 px-16 mt-10 max-lg:mx-auto max-lg:w-[600px]">
              <h2 className="font-bold text-start text-4xl text-slate-800">
                Sign Up
              </h2>
              <p className="mt-2 text-sm text-gray-500   ">
                Please enter your data below to Sign Up{" "}
              </p>

              <form
                onSubmit={handleSubmit}
                action=""
                className="flex flex-col gap-4"
              >
                <input
                  className="p-4 mt-7 rounded-xl border pl-5 text-sm"
                  id="email"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-4 rounded-xl border pl-5 text-sm"
                  id="Name"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="relative">
                  <input
                    className="p-4 rounded-xl border w-full pl-5 text-sm"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={PasswordVisibility}
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>
                {error && <p className="text-red-500 ">{error}</p>}
                <button className="bg-slate-900 rounded-full mt-5 text-white font-semibold py-3 hover:scale-105 duration-300">
                  Sign Up
                </button>
              </form>

              <div className="mt-14 text-xs border-b border-black py-4 text-black"></div>

              <div className="mt-3 text-xs flex justify-between items-center text-black">
                <p>Already have an account?</p>
                <button
                  onClick={() => navigate("/Login")}
                  type="submit"
                  className="py-3 px-5 bg-slate-900 text-white font-semibold border rounded-full w-[100px] hover:scale-110 duration-300"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* carousel */}
            <div className="w-1/2 bg-gradient-to-b from-gray-400 to-gray-200 h-[700px] max-lg:hidden">
              <Slider
                dots={true}
                infinite={true}
                speed={800}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={4000}
                arrows={false}
              >
                <div className="flex mx-auto px-20  mt-24 mb-60 w-[300px] h-[300px]">
                  <img
                    className="flex mx-auto w-[600px] h-[350px]"
                    src="../src/assets/carousel5.png "
                    alt="First slide"
                  />
                  <div className="mx-auto ">
                    <h3 className=" text-xl text-center leading-5 font-bold text-slate-700 lg:mt-16 mt-8 ">
                      Get more fun with amiibo series
                    </h3>
                  </div>
                  <p className=" text-sm px-14 text-center leading-6 font-base text-slate-500 mt-3 lg:w-full md:w-9/12 w-full">
                    explore a lot of good series from Nintendo
                  </p>
                </div>
                <div className="flex mx-auto px-20  mt-20 mb-60 w-[300px] h-[300px]">
                  <img
                    className="flex mx-auto w-[600px] h-[400px]"
                    src="../src/assets/carousel7.png "
                    alt="First slide"
                  />
                  <div className="mx-auto ">
                    <h3 className=" text-xl text-center leading-5 font-bold text-slate-700 lg:mt-10 mt-8 ">
                      More figures from Nintendo series
                    </h3>
                  </div>
                  <p className=" text-sm px-14 text-center leading-6 font-base text-slate-500 mt-3 lg:w-full md:w-9/12 w-full">
                    a lot of amiibo figures you can see on this website
                  </p>
                </div>

                <div className="flex mx-auto px-20  mt-20 mb-60 w-[300px] h-[300px]">
                  <img
                    className="flex mx-auto w-[600px] h-[400px]"
                    src="../src/assets/carousel6.png "
                    alt="First slide"
                  />
                  <div className="mx-auto ">
                    <h3 className=" text-xl text-center leading-5 font-bold text-slate-700 lg:mt-10 mt-8 ">
                      Many Characters Nintendo games
                    </h3>
                  </div>
                  <p className=" text-sm px-14 text-center leading-6 font-base text-slate-500 mt-3 lg:w-full md:w-9/12 w-full">
                    you can see more character from console games on nintendo
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
