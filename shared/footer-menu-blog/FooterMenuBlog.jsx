import React from 'react';
import './footer-menu-blog.scss'
import './media.scss'
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useQuery} from '@apollo/client';
import {GET_MENU_BLOG} from "@/entities/menu/actions/menuActions";

const FooterMenuBlog = () => {

    const {loading, error, data} = useQuery(GET_MENU_BLOG);

    return (
        <div className="footer-blog">
            <div className="footer-blog__title">
                {data && data.menu && data.menu.name}
            </div>
            <ul className="footer-blog__menu">
                {loading ? (
                    <div>...</div>
                    // <Box sx={{display: 'flex'}}>
                    //     <CircularProgress/>
                    // </Box>
                ) : error ? (
                    <Stack sx={{width: '100%'}} spacing={2}>
                        <Alert severity="error">
                            {error.graphQLErrors.map((err, index) => (
                                <div key={index}>{err.message}</div>
                            ))}
                        </Alert>
                    </Stack>
                ) : data.menuItems.edges.length > 0 ? (
                    data.menuItems.edges
                        // .sort((a, b) => a.node.order - b.node.order)
                        .map((link) =>
                            <li key={link.node.id}>
                                <Link href={link.node.path} className='footer-blog__menu-item'>
                                    {link.node.label}
                                </Link>
                            </li>
                        )
                ) : (
                    <div className="">no links</div>
                )
                }
            </ul>
        </div>
    );
};

export default FooterMenuBlog;