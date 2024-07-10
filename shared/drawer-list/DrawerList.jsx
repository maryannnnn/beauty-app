import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const DrawerList = () => {

     return (
         <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
             <List>
                 {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                     <ListItem key={text} disablePadding>
                         <ListItemButton>
                             <ListItemIcon>
                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                             </ListItemIcon>
                             <ListItemText primary={text} />
                         </ListItemButton>
                     </ListItem>
                 ))}
             </List>
             <Divider />
             <List>
                 {['All mail', 'Trash', 'Spam'].map((text, index) => (
                     <ListItem key={text} disablePadding>
                         <ListItemButton>
                             <ListItemIcon>
                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                             </ListItemIcon>
                             <ListItemText primary={text} />
                         </ListItemButton>
                     </ListItem>
                 ))}
             </List>
         </Box>
     )
}

export default DrawerList