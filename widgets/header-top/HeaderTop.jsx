import React from 'react';
import './header-top.scss'
import './media.scss'
import MenuTop from "../../shared/menu-top/MenuTop";
import MenuSoc from "../../shared/menu-soc/MenuSoc";
import MenuAccount from "../../shared/menu-account/MenuAccount";

const HeaderTop = () => {
    return (
        <div className='header-top'>
            <div className="container">
                <div className="header-top__inner">
                    <div className='header-top__menu-top'>
                        <MenuTop/>
                    </div>
                    <div className='header-top__menu-soc'>
                        <MenuSoc/>
                    </div>
                    <div className='header-top__menu-account'>
                        <MenuAccount/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;