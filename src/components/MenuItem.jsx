import React from "react";
import { gitHubURL } from "../const/const.jsx";

const MenuItem = ({ text = "", icon }) => {
  return (
    <div className={"flex w-full gap-3 space-y-0.5 items-center justify-start hover:text-almost-black cursor-pointer"}
         onClick={() => {
           console.log("click " + text);
           if (text === "Our team") window.open(gitHubURL);
         }
         }>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default MenuItem;


