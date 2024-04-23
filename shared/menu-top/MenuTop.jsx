import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './menu-top.scss'
import './media.scss'
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const MenuTop = () => {
    const [isLoadingTopMenu, setIsLoadingTopMenu] = useState(true);
    const [errorTopMenu, setErrorTopMenu] = useState(null);
    const [topMenu, setTopMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("response Before")
                const response = await axios.get('https://massage.neo-lines.com//wp-json/wp/v2/posts');
                console.log("response.data", response.data)
                setTopMenu(response.data);
            } catch (error) {
                setErrorTopMenu(error);
            } finally {
                setIsLoadingTopMenu(false);
            }
        };

        fetchData();
    }, []);

    // if (isLoadingTopMenu) {
    //     return <div className="menu-top__item">Loading...</div>;
    // }
    //
    // if (errorTopMenu) {
    //     return <div className="menu-top__item">Error: {errorTopMenu.message}</div>;
    // }

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
            ) : topMenu.length > 0 ? (
                topMenu
                    // .filter(link => link.isVisible)
                    // .sort((a, b) => a.orderLink - b.orderLink)
                    .map(link =>
                        <li key={link.id}>
                            <Link href="" className='menu-top__item'>
                                {link.id}
                            </Link>
                            {/*<Link href={link.urlLink} className='menu-top__item' >*/}
                            {/*    {link.nameLink}*/}
                            {/*</Link>*/}
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



