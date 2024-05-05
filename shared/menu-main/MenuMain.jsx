import React, {useEffect, useState} from 'react';
import './menu-nain.scss'
import './media.scss'
import {useQuery} from "@apollo/client";
import {GET_MENU_MAIN} from "@/entities/menu/actions/menuActions";
import { Box, CircularProgress, Stack, Alert, Button, Popover } from '@mui/material';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Link from "next/link";
import {checkMenuItem, getMenuItems} from "../utils/utils-menu";
import { useRef } from 'react';

const MenuMain = () => {
    const { loading, error, data } = useQuery(GET_MENU_MAIN);
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
                // <Box sx={{ display: 'flex' }}>
                //     <CircularProgress />
                // </Box>
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
                                {/*{checkMenuItem(link.node.id, data.menuItems.edges) ? (*/}
                                {/*    link.node.label*/}
                                {/*) : (*/}
                                    <Link href={link.node.path}>{link.node.label}</Link>
                                {/*)}*/}
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

export default MenuMain;

// const MenuMain = () => {
//     const { loading, error, data } = useQuery(GET_MENU_MAIN);
//     const [menuStates, setMenuStates] = useState({});
//     const anchorRefs = useRef({});
//
//     const handleMenuOpen = (linkId, event) => {
//         setMenuStates({
//             ...menuStates,
//             [linkId]: true,
//         });
//     };
//
//     const handleMenuClose = (linkId) => {
//         setMenuStates({
//             ...menuStates,
//             [linkId]: false,
//         });
//     };
//
//     return (
//         <ul className="menu-main">
//             {loading ? (
//                 <Box sx={{ display: 'flex' }}>
//                     <CircularProgress />
//                 </Box>
//             ) : error ? (
//                 <Stack sx={{ width: '100%' }} spacing={2}>
//                     <Alert severity="error">
//                         {error.graphQLErrors.map((err, index) => (
//                             <div key={index}>{err.message}</div>
//                         ))}
//                     </Alert>
//                 </Stack>
//             ) : data.menuItems.edges.length > 0 ? (
//                 data.menuItems.edges
//                     .filter((link) => link.node.parentId === null)
//                     .sort((a, b) => a.node.order - b.node.order)
//                     .map((link, index) => (
//                         <li
//                             className="menu-main__item"
//                             key={link.node.id}
//                             onMouseEnter={(event) => {
//                                 handleMenuOpen(link.node.id, event);
//                                 anchorRefs.current[link.node.id] = event.currentTarget;
//                             }}
//                             onMouseLeave={() => handleMenuClose(link.node.id)}
//                         >
//                             <Button
//                                 id={`menu-button-${index}`}
//                                 aria-controls={menuStates[link.node.id] ? `menu-${link.node.id}` : undefined}
//                                 aria-haspopup="true"
//                             >
//                                 {checkMenuItem(link.node.id, data.menuItems.edges) ? (
//                                     link.node.label
//                                 ) : (
//                                     <Link href={link.node.path}>{link.node.label}</Link>
//                                 )}
//                             </Button>
//                             {checkMenuItem(link.node.id, data.menuItems.edges) && (
//                                 <Menu
//                                     id={`menu-${link.node.id}`}
//                                     anchorEl={anchorRefs.current[link.node.id]}
//                                     open={Boolean(menuStates[link.node.id])}
//                                     onClose={() => handleMenuClose(link.node.id)}
//                                 >
//                                     {getMenuItems(link.node.id, data.menuItems.edges)}
//                                 </Menu>
//                             )}
//                         </li>
//                     ))
//             ) : (
//                 <div className="">no links</div>
//             )}
//         </ul>
//     );
// };
//
// export default MenuMain;



// const MenuMain = () => {
//
//     const {loading, error, data} = useQuery(GET_MENU_MAIN);
//
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);
//
//     const [menuStates, setMenuStates] = useState({});
//
//     const handleClick = (linkId, event) => {
//         setMenuStates({
//             ...menuStates,
//             [linkId]: event.currentTarget,
//         });
//     };
//
//     const handleClose = (linkId) => {
//         setMenuStates({
//             ...menuStates,
//             [linkId]: null,
//         });
//     };
//
//     return (
//         <ul className="menu-main">
//             {loading ? (
//                 <Box sx={{display: 'flex'}}>
//                     <CircularProgress/>
//                 </Box>
//             ) : error ? (
//                 <Stack sx={{width: '100%'}} spacing={2}>
//                     <Alert severity="error">
//                         {error.graphQLErrors.map((err, index) => (
//                             <div key={index}>{err.message}</div>
//                         ))}
//                     </Alert>
//                 </Stack>
//             ) : data.menuItems.edges.length > 0 ? (
//                 data.menuItems.edges
//                     .filter(link => link.node.parentId === null)
//                     .sort((a, b) => a.node.order - b.node.order)
//                     .map((link, index) =>
//                         <li className="menu-main__item" key={link.node.id} >
//                             <Button
//                                 id="basic-menu"
//                                 aria-controls={open ? 'basic-menu' : undefined}
//                                 aria-haspopup="true"
//                                 aria-expanded={open ? 'true' : undefined}
//                                 onClick={(event) => handleClick(link.node.id, event)}
//                             >
//                                 {checkMenuItem(link.node.id, data.menuItems.edges) ? link.node.label : (
//                                     <Link href={link.node.path}>
//                                         {link.node.label}
//                                     </Link>
//                                 )
//                                 }
//                             </Button>
//                             {checkMenuItem(link.node.id, data.menuItems.edges) && (
//                                 <Menu
//                                     id="fade-menu"
//                                     MenuListProps={{
//                                         'aria-labelledby': 'fade-button',
//                                     }}
//                                     anchorEl={menuStates[link.node.id]}
//                                     open={Boolean(menuStates[link.node.id])}
//                                     onClose={() => handleClose(link.node.id)}
//                                     TransitionComponent={Fade}
//                                 >
//                                     {getMenuItems(link.node.id, data.menuItems.edges)}
//                                 </Menu>
//                             )}
//                         </li>
//                     )
//             ) : (
//                 <div className="">no links</div>
//             )
//             }
//         </ul>
//     );
// };
//
// export default MenuMain