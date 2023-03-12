import React, { useState, useEffect, useRef, useContext } from "react";
import { Web3Context } from "../context/Web3Context";

export const Navbar = (params) => {
  const { account, balance } = useContext(Web3Context);
  return (
    <div className="flex bg-white sticky top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 justify-center pt-4 px-30">
      <div className="w-screen flex justify-between items-center px-20 p-2">
        <div className="flex items-center gap-12">
          <img src="img/Logo.svg" alt="" className="object-cover h-15 w-40" />
          <ul className="flex gap-10 list-none">
            <li className="cursor-pointer">
              <button
                onClick={() => {
                  params.setRoute("Latest releases");
                  console.log("shva");
                }}
              >
                Home
              </button>
            </li>
            <li
              onClick={() => {
                params.setRoute("Current Orders");
              }}
              className="cursor-pointer"
            >
              Current Orders
            </li>
            <li
              onClick={() => {
                params.setRoute("Past Orders");
              }}
              className="cursor-pointer"
            >
              Past Orders
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <img src="img/search.png" alt="" className="w-5 cursor-pointer" />
          <div className="col">
            <div className="">{account}</div>
            <div>{balance}</div>
          </div>
          <button
            className="w-24 p-2 bg-transparent hover:bg-black hover:text-white rounded-md cursor-pointer"
            onClick={() => {
              params.setConnected(false);
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
