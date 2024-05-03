import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const handleClick = () => {
    setClick(!click);
  };

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const activeStyle = {
    borderBottom: "2px solid white",
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  //mobile web
  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} onClick={() => navigate("/LandingPage")}>
          <li className="my-4 py-4 font-poppins  border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Figures")}>
          <li className="my-4 py-4  font-poppins   border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Figures
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Cards")}>
          <li className="my-4 py-4  font-poppins   border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Cards
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Series")}>
          <li className="my-4 py-4  font-poppins   border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Series
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Games")}>
          <li className="my-4 py-4 font-poppins  border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Games{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    // pc web

    <nav>
      <div className="nav flex bg-gradient-to-r from-gray-800 to-gray-700 fixed top-0 w-full justify-between h-10vh z-50 text-white px-20 py-8 flex-1 ">
        <div className="my-2 lg:flex md:flex lg: flex-1 items-center justify-start font-normal hidden">
          <div className="flex-10 font-poppins">
            <ul className="flex gap-10 mr-16 text-[18px]">
              <Link
                className="link"
                style={isActive("/LandingPage") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/LandingPage")}
              >
                <li className="font-poppins font-base text-lg  transition cursor-pointer">
                  Home
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Figures") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Figures")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Figures
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Cards") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Cards")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Cards
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Series") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Series")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Series
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Games") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Games")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Games
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex items-center mr-10">
          <div className="flex ">
            <Link className="relative">
              <a
                onClick={toggleDropdown}
                className="text-white cursor-pointer hover:text-primary"
              >
                {userData && (
                  <p className="flex text-lg font-base text-slate-100 italic cursor-pointer hover:text-primary hover:font-semibold">
                    {userData?.data?.name}{" "}
                    <img
                      src="../src/assets/icon_profile.png"
                      className="w-[26px] h-[26px] ml-3 "
                      alt=""
                    />
                  </p>
                )}
              </a>

              {dropdownVisible && (
                <div className="absolute right-0 mt-5 w-48 cursor-pointer bg-white pt-2  pb-1 rounded-md shadow-lg z-10">
                  <a
                    onClick={() => navigate("/Profile")}
                    className="block px-4 py-2 text-sm cursor-pointer text-gray-700 rounded-md border-b-2 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm  rounded-md  text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </Link>
          </div>
        </div>

        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {" "}
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
