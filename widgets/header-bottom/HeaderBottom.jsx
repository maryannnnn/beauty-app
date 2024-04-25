import React from 'react';
import './header-button.scss'
import MenuMain from "../../shared/menu-main/MenuMain";


const HeaderBottom = () => {

    return (
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-buttons__inner'>
                    <MenuMain/>
                </div>
                <div className=''>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom
