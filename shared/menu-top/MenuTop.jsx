import React, {useEffect, useState} from 'react';
import './menu-top.scss'
import './media.scss'
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const MenuTop = () => {
    const [isLoadingTopMenu, setIsLoadingTopMenu] = useState(true)
    const [errorTopMenu, setErrorTopMenu] = useState(null)
    const [topMenu, setTopMenu] = useState([]);
    // const menuTop = [
    //     {
    //         id: 0,
    //         nameLink: 'Main',
    //         urlLink: '/main',
    //         orderLink: 0,
    //         isVisible: true,
    //     },
    //     {
    //         id: 1,
    //         nameLink: 'Main 2',
    //         urlLink: '/main',
    //         orderLink: 1,
    //         isVisible: true,
    //     },
    //     {
    //         id: 2,
    //         nameLink: 'Main 2',
    //         urlLink: '/main',
    //         orderLink: 2,
    //         isVisible: true,
    //     }
    // ]

    useEffect(() => {
        const client = new ApolloClient({
            // uri: `${process.env.WP_URL}/wp/v2/posts`,
            uri: 'https://massage.neo-lines.com/wp-json/wp/v2/posts',
            cache: new InMemoryCache()
        });

        const fetchData = async () => {
            try {
                const {data} = await client.query({
                    query: gql`
                         query {
                            posts {
                                nodes {
                                    id
                                    title
                                    }
                                }
                            }
                         `
                });
                console.log("data.posts.nodes: ", data.posts.nodes)
                setTopMenu(data.posts.nodes);
            } catch (error) {
                setErrorTopMenu(error);
            } finally {
                setIsLoadingTopMenu(false)
            }
        };

        fetchData();
    }, []);

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
                            <Link href={link.title} className='menu-top__item'>
                                {link.title}
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