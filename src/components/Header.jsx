import React from "react";
import {ReactComponent as LogoIcon} from '../assets/images/logo.svg'
import NavItem from "./NavItem.jsx";
import { COMPANY, FEATURES, NAV_ITEM } from "../const/header_constants.jsx";
import NavMenu from "./NavMenu.jsx";
import Button from "./Button.jsx";
const Header = () => {
  return (
    <header className={'flex items-center'}>
     <LogoIcon/>
      <nav className={'flex gap-2 mx-5'}>
        <NavItem text={NAV_ITEM.Feature}>
          <NavMenu items={FEATURES}></NavMenu>
        </NavItem>
        <NavItem text={NAV_ITEM.Company}>
          <NavMenu items={COMPANY}></NavMenu>
        </NavItem>
        <NavItem text={NAV_ITEM.Careers}>
        </NavItem>
        <NavItem  text={NAV_ITEM.About}>
        </NavItem>
      </nav>
      <div className="ml-auto flex space-x-4">
        <Button>Sign in</Button>
        <Button hasBorder={true}>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
