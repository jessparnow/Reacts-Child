import React from "react";
import CardBtn from "../CardBtn";

import "./style.css";

function Card(props) {
  return (
    <div className="bg-white antialiased text-black object-center">
      <div>
        <img
          src= {props.image}
          alt={props.puppy}
          className="w-full object-cover object-center rounded-lg shadow-md object-centers"
        />
        <div className="relative px-5 -mt-0  ">
          <div className="object-center bg-white rounded-lg">
            <div className="content-center flex items-baseline">
              <span className="py-4 text-base bg-teal-200 text-orangedark text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                Woof
              </span>
              <div className="ml-2 text-lightblue uppercase text-xs font-semibold tracking-wider">
                {/* 2 baths &bull; 3 rooms */}
                
              </div>
            </div>
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
             Hi It's <span className="text-yellowlight text-md font-semibold">{props.human} </span>
             and
             <span className="text-lightblue text-md font-semibold"> {props.puppy}
             </span> !
            </h4>
            <div className="mt-1">
              Bio: {props.bio}
              <span className="text-darkblue text-sm"> </span>
            </div>
            <div className="mt-3">
              Age: <span className="text-orangedark text-md font-semibold">
                 {props.age}
              </span>
              {/* <span className="text-sm text-darkblue">(based on 234 ratings)</span> */}
            </div>
          </div>
          <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass" 
      />
       <div className="mt-12 py-4">
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
 </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

