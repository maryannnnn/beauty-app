import React from 'react';
import './header-middle.scss'
import './media.scss'
import HeaderButtons from "@/shared/header-buttons/HeaderButtons";
import HeaderContact from "@/shared/header-contact/HeaderContact";
import Link from "next/link";

const HeaderMiddle = () => {
    return (
        <div className='header-middle'>
            <div className="container">
                <div className="header-middle__inner">
                    <div className='header-middle__inner-logo'>
                        <Link href="/" className="header-middle__inner">
                            <img className="header-middle__inner-link-img" src="/logo_3.png" alt="Logo"/>
                        </Link>
                    </div>
                    <div className='header-middle__inner-buttons'>
                        <HeaderButtons/>
                    </div>
                    <div className='header-middle__inner-contact'>
                        <HeaderContact/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddle;