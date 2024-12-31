import React, { useState } from "react";
import { faBeer, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { searchData } from "../store/beerSlice";

function Header() {
  const dispatch = useDispatch();
  const serachBeer = (e) => {
    dispatch(searchData(e.target.value));
  };
  return (
    <>
      <div className="bg-cyan-900 text-white p-4 sm:p-8 flex  flex-col gap-4 justify-center sm:flex-row sm:justify-between items-center border-b-2 border-solid border-cyan-400">
        <div className=" text-2xl sm:text-4xl lg:text-5xl  font-bold">
          <FontAwesomeIcon icon={faBeer} /> Beer Store
        </div>
        <div className="flex items-center space-x-2 text-lg sm:text-xl  lg:text-2xl bg-cyan-700 rounded-xl overflow-hidden">
          <div className="pl-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div>
            <input
              type="text"
              className=" pl-2 lg:pl-3  text-cyan-950 appearance-none outline-none font-semibold py-1 placeholder:text-cyan-500"
              placeholder="Search Beer..."
              onChange={serachBeer}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
