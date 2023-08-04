import React, { useState } from "react";
import {ReactComponent as LogoIcon} from '../assets/images/logo.svg'
import {ReactComponent as MenuIcon} from '../assets/images/icon-menu.svg'
import {ReactComponent as MenuCloseIcon} from '../assets/images/icon-close-menu.svg'
import NavItem from "./NavItem.jsx";
import { COMPANY, FEATURES, NAV_ITEM } from "../const/header_constants.jsx";
import NavMenu from "./NavMenu.jsx";
import Button from "./Button.jsx";
import MobileMenu from "./MobileMenu.jsx";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={'flex justify-between items-center'}>
     <LogoIcon/>
      <button className={'flex xl:hidden z-30'}
      onClick={()=>setMenuOpen(!menuOpen)}
      >
        {!menuOpen && <MenuIcon/>}
        {menuOpen && <MenuCloseIcon/>}
      </button>
      <MobileMenu isOpen={menuOpen}></MobileMenu>
      <nav className={'hidden xl:flex gap-2 mx-5'}>
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
      <div className="hidden ml-auto xl:flex space-x-4">
        <Button>Sign in</Button>
        <Button hasBorder={true}>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
