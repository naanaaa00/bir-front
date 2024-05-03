import { NavLink } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EditIcon from '@mui/icons-material/Edit';


export const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
};


const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className=' bg-slate-950 p-3 h-screen'
    >
        <List >
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))} */}

            <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/addBook">
                    <ListItemIcon>
                        <AddIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary={"Add Book"} style={{ color: 'white' }}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/addPages">
                    <ListItemIcon>
                        <PostAddIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary={"Add Pages"} style={{ color: 'white' }}/>
                </ListItemButton>
            </ListItem>
            
            
        </List>
        
        <List>
        <Divider  className='bg-slate-50'/>
        <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/deleteBook">
                    <ListItemIcon>
                        <FolderDeleteIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary={"Delete Book"} style={{ color: 'white' }}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/deletePages">
                    <ListItemIcon>
                        <DeleteIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary={"Delete Page"} style={{ color: 'white' }}/>
                </ListItemButton>
            </ListItem>
        </List>

        <List>
        <Divider  className='bg-slate-50'/>
        <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/editBook">
                    <ListItemIcon>
                        <EditCalendarIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary={"Edit Book"} style={{ color: 'white' }}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/editPages">
                    <ListItemIcon>
                        <EditIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary={"Edit Page"} style={{ color: 'white' }}/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
);
  return (
    <div>
    <div className='Navbar flex shadow-sm p-3 '>
            {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))} */}



            <MenuIcon
                onClick={
                    toggleDrawer("left", true)
                }
            />
        

            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
            <div className='flex-grow'>

                <h1 className='text-2xl font-semibold text-center md:text-start md:pr-2.5 md:mx-8'>Admin</h1>
            </div>


        </div>
        <h1></h1>
        </div>
  )
}