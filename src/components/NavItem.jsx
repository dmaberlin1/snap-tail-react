import React, { useRef, useState } from "react";
import { ReactComponent as ArrowDownIcon } from "../assets/images/icon-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/images/icon-arrow-up.svg";
import useOutsideAlerter from "../tools/useOutsideAlerter.jsx";
import { linkedInURL } from "../const/const.jsx";

const NavItem = ({ text = "", children }) => {
  const [selected, setSelected] = useState("");
  // const {ref,isShow,setIsShow}= useOutsideAlerter(false);
  const ref = useRef(null);
  const OnOpenPopup = (event) => {
      if(text==='About') window.open(linkedInURL)
    children && setSelected(text !== selected ? text : "")
  }
  return (
    <div className={"relative mx-1"} ref={ref}>
      <div className="flex space-x-2 border-2 px-1 py-1.5 transition-all delay-75 border-transparent hover:border-gray-200/60 rounded-lg cursor-pointer  justify-center items-center hover:text-almost-black"
           onClick={() => OnOpenPopup()}>
      <span className={"text-medium-gray "}

      >
        {text}
      </span>
        {children && selected !== text && <ArrowDownIcon />}
        {children && selected === text && <ArrowUpIcon />}
      </div>
      {selected && children}
    </div>
  );
};

export default NavItem;
