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
            ) : data.menuItems.edges.length > 0 ? (
                data.menuItems.edges
                    // .sort((a, b) => a.node.order - b.node.order)
                    .map((link, index) =>
                        <li key={link.node.id}>
                            <Link href={link.node.path} className='menu-top__item'>
                                {link.node.label}
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



