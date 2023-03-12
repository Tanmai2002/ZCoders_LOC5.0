import React from 'react'

export const Card = (props) => {
  console.log(props.prod);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="img/card-top.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.prod[3]}</div>
            <p className="text-gray-700 text-base">
             {props.prod[4]}
            </p>
            <p className="text-gray-700 text-subtitle">
             {props.prod[1]}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      );
}
