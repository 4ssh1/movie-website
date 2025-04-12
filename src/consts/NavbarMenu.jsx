import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function NavbarMenu({handleClose}) {
    const Menu = [
        {
            title: "Profile",
            path: "",
            icon: ""
        },
        {
            title: "My account",
            path: "",
            icon: ""
        },
        {
            title: "Add another account",
            path: "",
            icon: ""
        },
        {
            title: "Logout",
            path: "",
            icon: ""
        },

    ]
  return (
    <div>
      <MenuItem onClick={handleClose}>
        <Box key={item.title} display="flex" alignItems="center" gap={1}>
            <Avatar /> 
            {item.title}
        </Box>
      </MenuItem>
    </div>
  )
}

export default NavbarMenu
