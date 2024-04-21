import React from 'react';
import './header.scss'
import './media.scss'
import HeaderTop from "../header-top/HeaderTop";
import HeaderMiddle from "../header-middle/HeaderMiddle";
import HeaderBottom from "../header-bottom/HeaderBottom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner">
                <HeaderTop/>
                <HeaderMiddle/>
                <HeaderBottom/>
            </div>
        </div>
    );
};

export default Header;
