import Link from "next/link";
import React from "react";
import { Link as MuiLink} from '@mui/material';
import theme from "../../material.config";

export const checkMenuItem = (linkId, menuMain) => {
    const menuUp = menuMain.filter(item => item.node.parentId === linkId);
    return menuUp.length > 0;
}

export const getMenuItems = (linkId, menuMain) => {

    return (
        <>
            {menuMain.filter(item => item.node.parentId === linkId)
               .sort((a, b) => a.node.order - b.node.order)
                .map(item => (
                        <MuiLink key={item.node.id} component={Link} href={item.node.path} sx={{
                            display: 'block',
                            color: theme.palette.primary.dark,
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'none',
                                color: theme.palette.primary.light,
                            },
                            padding: '8px 16px',
                        }}>
                            {item.node.label}
                        </MuiLink>
                    )
                )
            }
        </>
    )
};