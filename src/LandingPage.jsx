import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import "./index.css";

import { useSelector } from "react-redux";

const LandingPage = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token === null) {
      alert("silahkan login dulu");
      navigate("/Login");
    }
  }, []);

  return (
    <div>
      <Nav />

      <div className="justify-center flex mt-52">
        <img src="./src/assets/amiibo-lineup-img.avif" alt="" />
      </div>
      <div className="text-center font-bold  font-poppins text-3xl mt-20">
        <h2>
          Click{" "}
          <span>
            <button
              className="font-normal underline"
              onClick={() => navigate("/Figures")}
            >
              {" "}
              here{" "}
            </button>
          </span>
          {""} to get fun with amiibo™ accessories
        </h2>
        <p className="font-thin text-xl mt-5 ">
          Various things about amiibo, such as additional characters, series, or
          other facilities in compatible games.
        </p>
      </div>

      {/* unlock cool */}
      <div className="2xl:mx-auto mt-20 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
        <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800">
          Unlock cool extras
        </h1>
        <p className="md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600">
          One amiibo may work with multiple games. Check out some of the fun
          stuff you can do.
        </p>

        <div className="md:flex items-start justify-between mt-12">
          <div className="md:w-1/2 lg:w-full">
            <div>
              <div className="relative">
                <img src="./src/assets/ac_cards.avif" alt="" />
              </div>

              <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
                Add a character to the game
              </h1>
              <p className="text-base leading-normal mt-2 sm:pr-20 md:pr-10  text-gray-600">
                Invite characters to your island in the Animal Crossing™: New
                Horizons
                <br />
                game.
              </p>
              <button
                className="flex items-center justify-between w-72 mt-4 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                onClick={() => navigate("/Character")}
              >
                <p className="text-base font-medium leading-4 text-white">
                  Read more
                </p>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33203 8H12.6654"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33344L12.6667 8.0001"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-20">
              <div className="relative">
                <img src="./src/assets/inkling.avif" alt="" />
              </div>

              <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
                Level up or customize your character
              </h1>
              <p className="text-base leading-normal mt-2 sm:pr-20 md:pr-10 text-gray-600">
                Train and fight Figure Players in the Super Smash Bros.™ <br />
                Ultimate game.
              </p>
              <button
                onClick={() => navigate("/Games")}
                className="flex items-center justify-between w-72 mt-4 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <p className="text-base font-medium leading-4 text-white">
                  Read more
                </p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33203 8H12.6654"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33344L12.6667 8.0001"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
            <div>
              <div className="relative">
                <img src="./src/assets/cat_mario.avif" alt="" />
              </div>

              <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
                Get bonuses or special items
              </h1>
              <p className="text-base leading-normal mt-2 sm:pr-20 md:pr-10 text-gray-600">
                Unlock power-ups and other in-game enhancements in the Super
                Mario™ <br /> 3D World + Bowser's Fury game.
              </p>
              <button
                onClick={() => navigate("/Series")}
                className="flex items-center justify-between w-72 mt-4 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <p className="text-base font-medium leading-4 text-white">
                  Read more
                </p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33203 8H12.6654"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33344L12.6667 8.0001"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-20">
              <div className="relative">
                <img
                  src="./src/assets/invite_lobo.webp"
                  className="h-[300px]"
                  alt="stairs"
                />
              </div>

              <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-6 text-gray-800">
                Interaction with user
              </h1>
              <p className="text-base leading-normal mt-2 sm:pr-20 md:pr-10 text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <button
                onClick={() => navigate("/Cards")}
                className="flex items-center justify-between w-72 mt-4 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <p className="text-base font-medium leading-4 text-white">
                  Read more
                </p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33203 8H12.6654"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33344L12.6667 8.0001"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* many forms */}
      <div className="text-center font-bold font-poppins text-3xl mt-32">
        <h2>Many forms of fun</h2>
        <p className="font-thin text-xl mt-5 ">
          From high-quality character figures to super-portable cards, amiibo
          can come in different shapes and sizes.
        </p>
      </div>

      <div className="container flex mx-auto md:py-12 py-9">
        <div className=" bg-gray-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-12 gap-14 lg:px-9 lg:py-12 py-10 md:px-12 px-4">
          {/* Nintendo Switch */}
          <div className="border-2 px-5 py-2 shadow-2xl h-[450px]  cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <img src="./src/assets/nintendo_switch.png" alt="" />
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
              Nintendo Switch
            </h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              You can tap your amiibo to the right Joy-Con™ controller's Right
              Stick or the NFC touchpoint on the Nintendo Switch Pro Controller.
            </p>
          </div>

          {/* Wii U™ GamePad*/}

          <div className="border-2 px-5 py-2 shadow-2xl  cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <img src="./src/assets/wiiu.png" alt="" />
            <h3 className="text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8">
              Wii U™ GamePad
            </h3>
            <p className="text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Tap any amiibo accessory to the NFC reader on your Wii U™ GamePad
              controller.
            </p>
          </div>

          {/* New Nintendo 3DS™ XL */}

          <div className="border-2 px-5 py-2 shadow-2xl  cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <img src="./src/assets/nintendo_3dx_xl.png" alt="" />
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
              New Nintendo 3DS™ XL
            </h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              The New Nintendo 2DS™ XL and New Nintendo 3DS™ XL come with
              built-in amiibo support. Just tap an amiibo to the NFC reader on
              the lower screen.
            </p>
          </div>

          {/* Nintendo 3DS™*/}

          <div className="border-2 px-5 py-2 shadow-2xl  cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <img src="./src/assets/nintendo_3ds.png" alt="" />
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
              Nintendo 3DS™
            </h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              You can also use amiibo with Nintendo 3DS™, Nintendo 3DS™ XL, or
              Nintendo 2DS™ systems via the Nintendo 3DS NFC Reader/Writer
              accessory (sold separately).
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
