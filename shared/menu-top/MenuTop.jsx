import React, {useEffect, useState} from 'react';
import './menu-top.scss'
import './media.scss'
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MenuTop = () => {
    // const {getMenuTopAction} = useActions();
    // const menuId = 1;
    const menuTop = [
        {
            id: 0,
            nameLink: 'Main',
            urlLink: '/main',
            orderLink: 0,
            isVisible: true,
        },
        {
            id: 1,
            nameLink: 'Main 2',
            urlLink: '/main',
            orderLink: 1,
            isVisible: true,
        },
        {
            id: 2,
            nameLink: 'Main 2',
            urlLink: '/main',
            orderLink: 2,
            isVisible: true,
        }
    ]

    const [isLoadingTopMenu, setIsLoadingTopMenu] = useState(false)
    const [errorTopMenu, setErrorTopMenu] = useState('')


    // useEffect(() => {
    //     getMenuTopAction(menuId);
    // }, [menuId]);

    return (
        <ul className="menu-top">
            {isLoadingTopMenu ? (
                <Box sx={{display: 'flex'}}>
                    <CircularProgress/>
                </Box>
            ) : errorTopMenu ? (
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert severity="error">{errorTopMenu}</Alert>
                </Stack>
            ) : menuTop.length > 0 ? (
                menuTop
                    .filter(link => link.isVisible)
                    .sort((a, b) => a.orderLink - b.orderLink)
                    .map(link =>
                        <li className='menu-top__item' key={link.id}>
                            <Link href={link.urlLink} className='menu-top__item' >
                                {link.nameLink}
                            </Link>
                        </li>
                    )
            ) : (
                <div className="">no links</div>
            )
            }
        </ul>
    );
};

export default MenuTop;