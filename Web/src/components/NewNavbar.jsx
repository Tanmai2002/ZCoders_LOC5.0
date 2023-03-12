import React from "react";

export const NewNavbar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex bg-white sticky top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 justify-center pt-4 px-30">
      <div className="w-screen flex justify-between items-center px-20 p-2">
        <div className="flex items-center gap-12">
          <img src="img/Logo.svg" alt="" className="object-cover h-15 w-40" />
          <div className="relative">
            <button onClick={handleOpen}>Select Category</button>
            {open ? (
              <ul className="absolute list-none m-1 border-2 border-gray-500 w-36">
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("All")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">All</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Shoes")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Shoes</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Jewellery")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Jewellery</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Watches")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Watches</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Eye wear")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Eye wear</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Home Decor")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Home Decor</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Hand bags")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Hand bags</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Fragrances")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Fragrances</button>
                </li>
                <li className="m-0 bg-white hover:bg-slate-200">
                  <button onClick={()=>{props.setCategory("Clothing")}} className="w-full h-full text-left bg-none text-inherit border-none p-1 m-0 cursor-pointer">Clothing</button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src="img/search.png" alt="" className="w-5 cursor-pointer" />
          <button className="w-24 p-2 bg-transparent cursor-pointer">
            <img src="img/user.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
