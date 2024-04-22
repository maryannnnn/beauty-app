import React, {useEffect} from 'react';
import './menu-soc.scss'
import './media.scss'
import Link from 'next/link';

const MenuSoc = () => {

    return (
        <div className='menu-soc'>
            <Link href='' className='menu-soc__item' >
                Soc
            </Link>
            <Link href='' className='menu-soc__item' >
                Soc
            </Link>
            <Link href='' className='menu-soc__item' >
                Soc
            </Link>
        </div>
    );
};

export default MenuSoc;