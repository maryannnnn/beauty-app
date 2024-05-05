import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";

export const checkMenuItem = (linkId, menuMain) => {
    const menuUp = menuMain.filter(item => item.node.parentId === linkId);
    return menuUp.length > 0;
}


export const getMenuItems = (linkId, menuMain) => {

    return menuMain
        .filter(item => item.node.parentId === linkId)
        // .sort((a, b) => a.node.orderLink - b.node.orderLink)
        .map(item => (
                <MenuItem key={item.node.id}>
                    <Link href={item.node.path}>
                        {item.node.label}
                    </Link>
                </MenuItem>
            )
        )
};