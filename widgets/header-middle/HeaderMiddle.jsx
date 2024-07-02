import React from 'react';
import './header-middle.scss'
import './media.scss'
import HeaderButtons from "@/shared/header-buttons/HeaderButtons";
import HeaderContact from "@/shared/header-contact/HeaderContact";
import Link from "next/link";
import Image from 'next/image';

const HeaderMiddle = () => {
    return (
        <div className='header-middle'>
            <div className="container">
                <div className="header-middle__inner">
                    <div className='header-middle__inner-logo'>
                        <Link href="/" className="header-middle__inner">
                            <Image
                                src="/logo_3.png"
                                alt="Logo"
                                width={343}
                                height={60}
                                layout="responsive"
                                priority
                            />
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