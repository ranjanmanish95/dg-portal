import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  sideText: {
    '& span': {
      fontSize: '14px !important',
      '& selected': {
        fontWeight: 'bold',
      }
    },
  },
  toolbarStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatarRight:{
    display:'flex',
    alignItems: 'center',
  },
  avatarstyle: {
    display:'flex',
    alignItems: 'center',
    borderRight: '2px solid #7ab4ee',
    paddingRight: '14px',
  },
  navbar_menu_right_bell: {
    position: 'relative',
    paddingRight: '14px',
    paddingLeft: '14px',
    cursor: 'pointer',
    '& svg': {
      fontSize: '30px',
      color: '#fff',
      verticalAlign: 'bottom',
    },
    '& button': {
      padding: '0px',
      minWidth: 'auto',
    },
  },
  navbar_menu_right_bell_value: {
    backgroundColor: 'red',
    color: '#fff',
    position: 'absolute',
    right: '15px',
    top: '0px',
    lineHeight: '14px',
    width: '10px',
    height: '10px',
    textAlign: 'center',
    borderRadius: '50px',
  },
}));
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: '#1976d200 !important',}}>
        <Toolbar className={classes.toolbarStyle}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box>
          <Typography variant="h1" noWrap component="div">
            ACME
          </Typography>
          </Box>
          <Box className={classes.avatarRight}>
          <Stack direction="row" spacing={1} className={classes.avatarstyle}>
      <Avatar>M</Avatar>
      <Typography variant="h4" noWrap component="div">
            Manish Ranjan<br/><span style={{fontSize:'12px', fontWeight: '400'}}>Complaince Officer</span>
       </Typography>
    </Stack>
          <Box
            className={classes.navbar_menu_right_bell}
          >
            <Box>
              <span className={classes.navbar_menu_right_bell_value}></span>
              <span><NotificationsSharpIcon /></span>
            </Box>
            </Box>
            </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} 
      PaperProps={{
    sx: {
      backgroundColor: "#263A4C",
      color: '#ffffff',
    }
  }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> {navigate('/')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DashboardSharpIcon style={{color: '#ffffff'}}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} className={classes.sideText}/>
              </ListItemButton>
            </ListItem>  
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> {navigate('/myworkitems')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <WorkIcon style={{color: '#ffffff'}}/>
                </ListItemIcon>
                <ListItemText primary="My Work Items" sx={{ opacity: open ? 1 : 0 }} className={classes.sideText} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate('/taskslists')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AssignmentIcon style={{color: '#ffffff'}}/>
                </ListItemIcon>
                <ListItemText primary="Tasks Lists" sx={{ opacity: open ? 1 : 0 }} className={classes.sideText}/>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}