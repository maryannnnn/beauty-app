import React, {useEffect, useState} from 'react';
import './menu-nain.scss'
import './media.scss'
// import {useQuery} from "@apollo/client";
// import client from '@/app/graphql/apollo-client';
// import {GET_MENU_MAIN} from "@/entities/menu/actions/menuActions";
import { Box, CircularProgress, Stack, Alert, Button, Popover } from '@mui/material';
import Link from "next/link";
import {checkMenuItem, getMenuItems} from "../utils/utils-menu";
import menuMain from './menuMain.json';

const MenuMain = ({initialData}) => {

    const {data} = menuMain

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // const { loading, error, data } = useQuery(GET_MENU_MAIN, {
    //     initialData: initialData
    // });
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeLink, setActiveLink] = useState(null);

    const handleMenuOpen = (event, linkId) => {
        setAnchorEl(event.currentTarget);
        setActiveLink(linkId);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setActiveLink(null);
    };

    const handleMouseEnter = (event, linkId) => {
        setAnchorEl(event.currentTarget);
        setActiveLink(linkId);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
        setActiveLink(null);
    };

    return (
        <ul className="menu-main">
            {loading ? (
                <div>...</div>
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
                    .filter((link) => link.node.parentId === null)
                    .sort((a, b) => a.node.order - b.node.order)
                    .map((link, index) => (
                        <li
                            key={link.node.id}
                            onMouseEnter={(event) => handleMouseEnter(event, link.node.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Button
                                aria-controls={activeLink === link.node.id ? `menu-${link.node.id}` : undefined}
                                aria-haspopup="true"
                                onClick={(event) => handleMenuOpen(event, link.node.id)}
                            >
                                    <Link href={link.node.path}>{link.node.label}</Link>
                            </Button>
                            {checkMenuItem(link.node.id, data.menuItems.edges) && (
                                <Popover
                                    id={`menu-${link.node.id}`}
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl && activeLink === link.node.id)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {getMenuItems(link.node.id, data.menuItems.edges)}
                                </Popover>
                            )}
                        </li>
                    ))
            ) : (
                <div className="">no links</div>
            )}
        </ul>
    );
};

export async function getStaticProps() {
    // const { data } = await client.query({
    //     query: GET_MENU_MAIN
    // });

    const {data} = menuMain

    return {
        props: {
            initialData: data
        }
    };
}
export default MenuMain;

