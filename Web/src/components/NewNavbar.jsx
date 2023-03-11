import React from "react";

export const NewNavbar = () => {
  return (
    <div className="flex bg-white sticky top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 justify-center pt-4 px-30">
      <div className="w-screen flex justify-between items-center px-20 p-2">
        <div className="flex items-center gap-12">
          <img src="img/Logo.svg" alt="" className="object-cover h-15 w-40" />
          <ul className="flex gap-10 list-none">
            <li className="cursor-pointer">Select Category</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <img src="img/search.png" alt="" className="w-5 cursor-pointer" />
          <button className="w-24 p-2 bg-transparent cursor-pointer"><img src="img/user.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
};
