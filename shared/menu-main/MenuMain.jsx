import React, {useEffect, useState} from 'react';
import './menu-nain.scss'
import './media.scss'
import {useQuery} from "@apollo/client";
import {GET_MENU_MAIN} from "@/entities/menu/actions/menuActions";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Link from "next/link";
const MenuMain = () => {

    const { loading, error, data } = useQuery(GET_MENU_MAIN);

    return (
        <ul className="menu-main">
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
                    .map((link) =>
                        <li key={link.node.id}>
                            <Link href={link.node.path} className='menu-main__item'>
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

export default MenuMain