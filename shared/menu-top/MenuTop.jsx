import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './menu-top.scss'
import './media.scss'
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import {WP_URL} from "@/app/config/config";
import {GET_POSTS} from "@/entities/menu/actions/menuActions";

const MenuTop = () => {
    // const [isLoadingTopMenu, setIsLoadingTopMenu] = useState(true);
    // const [errorTopMenu, setErrorTopMenu] = useState(null);
    // const [topMenu, setTopMenu] = useState([]);

    const { loading, error, data } = useQuery(GET_POSTS);

    return (
        <ul className="menu-top">
            {loading ? (
                <Box sx={{display: 'flex'}}>
                    <CircularProgress/>
                </Box>
            ) : error ? (
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        {error.graphQLErrors.map((err, index) => (
                            <div key={index}>{err.message}</div>
                        ))}
                    </Alert>
                </Stack>
            ) : data.posts.nodes.length > 0 ? (
                data.posts.nodes
                    // .filter(link => link.isVisible)
                    // .sort((a, b) => a.orderLink - b.orderLink)
                    .map((link, index) =>
                        <li key={index}>
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



