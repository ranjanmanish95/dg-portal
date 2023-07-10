import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  sideText: {
    '& span': {
      fontSize: '14px !important',
      fontWeight: '600',
      '& selected': {
        fontWeight: 'bold',
      }
    },
  },
  toolbarStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatarRight: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarstyle: {
    display: 'flex',
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
  navLinkStyleUl: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '60px !important',
    paddingLeft: '4px !important',
    '& .MuiListItemIcon-root': {
      marginRight: '16px',
    },
    '& li': {
      width: 'auto',
      color: '#6C6C6C',
      '& svg': {
        color: '#6C6C6C',
      },
    },
  },
}));
const drawerWidth = 240;

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


export default function SideNav(props) {
  const classes = useStyles();
  const [open] = React.useState(true);
  const navigate = useNavigate();
  const YELLOWFIN_URL="http://14.97.142.161:8080";
  const loginToken = props.loginToken;

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: '#1976d200 !important', }}>
        <Toolbar className={classes.toolbarStyle}>
          <Box>
            <Typography variant="h1" noWrap component="div">
              ACME
            </Typography>
          </Box>
          <Box className={classes.avatarRight}>
            <Stack direction="row" spacing={1} className={classes.avatarstyle}>
              <Avatar>M</Avatar>
              <Typography variant="h4" noWrap component="div">
                Matt Thomas<br /><span style={{ fontSize: '12px', fontWeight: '400' }}>Complaince Officer</span>
              </Typography>
            </Stack>
            <Box
              className={classes.navbar_menu_right_bell}
            >
              <Box>
                <span><LogoutSharpIcon /></span>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
        <List className={classes.navLinkStyleUl}>  
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> {navigate('/myworkitems')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
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
                <ListItemText primary="Tasks Lists" sx={{ opacity: open ? 1 : 0 }} className={classes.sideText}/>
              </ListItemButton>
            </ListItem>
            <a style={{color: "grey", textDecoration: "none"}} disablePadding sx={{ display: 'block' }} href={`${YELLOWFIN_URL}/logon.i4?LoginWebserviceId=${loginToken}`} target="_self" rel="noreferrer">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} className={classes.sideText}/>
              </ListItemButton>
            </a>
        </List>
    </Box>
  );
}