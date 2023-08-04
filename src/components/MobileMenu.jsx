import React from "react";
import NavItem from "./NavItem.jsx";
import { COMPANY, FEATURES, NAV_ITEM } from "../const/header_constants.jsx";
import MenuItem from "./MenuItem.jsx";
import { getId } from "../const/const.jsx";
import Button from "./Button.jsx";

const MobileMenu = ({isOpen=false}) => {
  return (
    <>
      <div className={`${isOpen ?'flex':'hidden'} absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh]`}></div>
      <div className={`${isOpen ?'flex' :'hidden'} absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh]`}>
      <nav className="my-10 mx-5 space-y-5 text-lg w-full">
        <NavItem text={NAV_ITEM.Feature}>
          <div className={'flex flex-col space-y-5 p-2'}>
            {FEATURES.map(({text,icon}) => <MenuItem key={getId()} text={text} icon={icon}/>)}
          </div>
        </NavItem>
        <NavItem text={NAV_ITEM.Company}>
          <div className={'flex flex-col space-y-5 p-2'}>
            {COMPANY.map(({text,icon}) => <MenuItem key={getId()} text={text} icon={icon}/>)}
          </div>
        </NavItem>
        <NavItem text={NAV_ITEM.Careers}/>
        <NavItem text={NAV_ITEM.About}/>
        <div className="flex flex-col space-y-5">
          <Button>Sign in</Button>
          <Button hasBorder>Sign up</Button>
        </div>
      </nav>
      </div>
    </>
  );
};

export default MobileMenu;
