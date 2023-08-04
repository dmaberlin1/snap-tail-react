import React from "react";
import { getId } from "../const/const.jsx";
import MenuItem from "./MenuItem.jsx";


const NavMenu = ({items=[]}) => {
  return (
    <div className={'flex flex-col px-4 py-2 bg-almost-white drop-shadow text-medium-gray rounded-lg absolute top-10 right-0 w-36 space-y-2 z-20'}>
      {items.map(({text,icon})=><MenuItem key={getId()} text={text} icon={icon}>
      </MenuItem>)}
    </div>
  );
};

export default NavMenu;
