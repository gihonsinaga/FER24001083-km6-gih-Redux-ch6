import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CharacterAmiibo } from "../redux/actions/gamesActions";
// import { handleSearch } from "../redux/actions/figureActions";

import { setAmiibo } from "../redux/reducers/gamesReducers";

const Games = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedBy, setSortedBy] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.games.games);

  useEffect(() => {
    dispatch(CharacterAmiibo());
  }, []);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token === null) {
      alert("silahkan login dulu");
      navigate("/Login");
    }
  }, []);

  const sortByName = () => {
    let sorted;
    if (sortedBy === "name") {
      sorted = [...data].reverse();
      setSortedBy(null);
    } else {
      sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setSortedBy("name");
    }
    dispatch(setAmiibo(sorted));
    setCurrentPage(1);
  };

  //search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? data
        .filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = data
    ? Math.ceil(
        data.filter((e) =>
          e.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).length / itemsPerPage
      )
    : 0;

  let pageNumbers = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    // const searchTerm = useSelector((state) => state.figures.searchTerm);
    // // console.log("searchTerm ", searchTerm);

    // const handleSearchChange = (event) => {
    //   dispatch(handleSearch(event.target.value));
    //   setCurrentPage(1);
    // };
  }

  return (
    <div className="">
      <div>
        <Nav />
      </div>

      <div className=" mt-48 2xl:container ml-28 2xl:px-20 xl:px-12 sm:px-6 px-5 mb-16">
        <h1 className="lg:text-5xl text-3xl font-bold leading-9 text-black">
          Amiibo Games
        </h1>
      </div>

      <div className="flex ml-48 justify-between">
        <div className="flex">
          <div className="font-bold text-xl mt-2 mr-4">Sort By :</div>
          <button
            onClick={sortByName}
            className="bg-black mb-2 flex  text-white  rounded-3xl py-3 px-8 font-medium  mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent"
          >
            Name <div className="ml-5">⇅</div>
          </button>
        </div>
        <div className="flex justify-end ">
          <div className="font-bold text-xl mt-4 mr-4">Search :</div>
          <input
            type="text"
            placeholder="Search ..."
            onChange={handleSearch}
            className="text-black pl-5 mr-48 bg-slate-100 justify-start border-2 border-black rounded-full p-2 w-[400px] outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-24 mt-20 mb-5 gap-y-20 gap-x-20 px-16 justify-center">
        {currentItems.map((e) => (
          <div className="flex flex-col justify-center">
            <div className="group [perspective:1000px]">
              <div className="flex flex-col w-[350px] h-[70px] border-2 shadow-xl shadow-slate-500 items-center cursor-pointer transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="font-bold text-slate-700 mt-5 text-xl absolute inset-0 ">
                  <div className="object-cover text-center shadow-black/40">
                    {e?.name}
                  </div>
                </div>
                <div className="font-bold text-slate-700 mt-5 text-xl absolute inset-0 h-[50px] w-full px-12 text-center shadow-xl shadow-slate-500  [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="object-cover text-center shadow-black/40">
                    Code : {e?.key}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentItems.length === 0 && (
        <div className="text-center  mt-10 text-lg text-gray-600">
          <img
            src="../src/assets/search2.png"
            width="200"
            height="100"
            className="mx-auto mb-5"
            alt=""
          />
          No amiibo games found here . . .
        </div>
      )}

      <div>
        <ul className="flex justify-end mr-48 mt-20">
          <li
            className={`cursor-pointer mx-1 py-3 px-5 bg-black flex mb-2 text-white  rounded-3xl font-medium ml-2 hover:bg-transparent mr-4 hover:border-black hover:text-black duration-300 hover:border border border-transparent ${
              currentPage === 1
                ? "pointer-events-none bg-white border-black text-slate-900 "
                : ""
            }`}
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
          >
            Back
          </li>

          {pageNumbers.map((pageNumber, index) => (
            <li
              key={index}
              className={`cursor-pointer mx-1 py-3 px-5  flex mb-2   rounded-3xl font-medium mr-4 duration-300  border-2 hover:bg-black hover:text-white ${
                pageNumber === currentPage ? "bg-black text-white" : ""
              }`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}

          <li
            className={`cursor-pointer mx-1 py-3 px-5 bg-black flex mb-2 text-white  rounded-3xl font-medium ml-2 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent ${
              currentPage === totalPages
                ? "pointer-events-none  bg-white border-black text-slate-900"
                : ""
            }`}
            onClick={() => {
              if (currentPage < totalPages) {
                paginate(currentPage + 1);
              }
            }}
          >
            Next
          </li>
        </ul>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Games;
