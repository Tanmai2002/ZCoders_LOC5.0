import React from "react";

export const ImageDisplayer = (props) => {
  return (
    <div className={`bg-[url('img/${props.pn}')] w-[235px] flex items-end pb-2 pl-1 justify-center`} >
      <div className="pb-2 flex justify-center text-white bg-[#00000055] w-full rounded-b-xl">
        <p className="">{props.pnn}</p>
      </div>
    </div>
  );
};
