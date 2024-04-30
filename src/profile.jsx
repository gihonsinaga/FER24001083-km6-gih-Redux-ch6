import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      alert("silahkan login dulu");
      navigate("/Login");
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      // if (localStorage.getItem("login") === "google component") {
      //   const decoded = jwtDecode(localStorage.getItem("token"));
      //   console.log("decoded", decoded);
      //   setUserData(decoded);
      //   if (decoded?.exp < new Date() / 1000) {
      //     alert("token expire");
      //     handleLogout();
      //     return;
      //   }
      // } else {
      try {
        const response = await axios.get(
          "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const userData = response.data;
        console.log("User profle: ", userData);
        setUserData(userData);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // alert("Token expired");
          handleLogout();
          return;
        } else {
          alert("An error occurred while fetching user data");
          console.error("Error: ", error);
        }
      }
      // }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  const IMAGES = {
    image1: new URL("../src/assets/bg_profile.png", import.meta.url).href,
  };
  return (
    <>
      <div
        className=" "
        style={{
          backgroundImage: `url(${IMAGES.image1})`,
          backgroundSize: "cover",
          height: "100vh",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div>
          <button
            className="bg-gray-800 text-white mt-4 ml-5 rounded-3xl py-3 mb-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent"
            onClick={() => navigate("/LandingPage")}
          >
            back
          </button>
        </div>
        <div className="bg-gray-100  flex justify-center mx-auto shadow-2xl shadow-gray-800 w-[1200px] h-[700px] items-center max-lg:w-[700px] max-lg:h-[630px] max-md:w-[350px] max-md:h-[700px] ">
          <div className="mr-10 w-1/2 flex justify-center items-center bg-gray-500 h-[700px] max-lg:hidden">
            <img
              src="../src/assets/profile.png"
              className="h-[350px] w-[350px] "
              alt=""
            />
          </div>
          <div className="w-1/2 px-16 max-lg:mx-auto max-lg:w-[600px]">
            <p className=" text-base text-gray-500   ">Name</p>
            {userData && (
              <h2 className="font-semibold  text-start text-4xl text-slate-800">
                {userData?.data?.name}
              </h2>
            )}

            <p className="mt-12 text-base text-gray-500   ">Email</p>
            {userData && (
              <h2 className="font-semibold  text-start text-3xl text-slate-800">
                {userData?.data?.email}
              </h2>
            )}
            <div className="flex justify-between pr-36">
              <p className="mt-14 text-base text-gray-500   ">
                Created at
                {userData && (
                  <h2 className="font-semibold  text-start text-3xl text-slate-800">
                    {formatDate(userData.data.createdAt)}
                  </h2>
                )}
              </p>

              <p className="mt-14 text-base text-gray-500   ">
                Type
                {userData && (
                  <h2 className="font-semibold  text-start text-3xl text-slate-800">
                    {userData?.data?.type}
                  </h2>
                )}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
