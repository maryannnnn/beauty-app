import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "../drawer-list/DrawerList";

const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                edge="start"
                sx={{
                    marginRight: 2,
                    ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <DrawerList/>
            </Drawer>
        </div>
    );
}

export default DrawerMenu
