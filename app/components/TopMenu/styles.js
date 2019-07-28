const drawerWidth = 240;

export default theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: `0 ${theme.spacing(1)}px 0 0`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& [class*="MuiToolbar-gutters"]': {
      padding: 0,
    },
  },
  appBarBgLight: {
    background: theme.palette.primary.main,
  },
  appBarBgDark: {
    background: theme.palette.background.default,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    marginRight: -theme.spacing(1),
  },
  menuButtonHide: {
    display: 'none',
  },
  headerTitle: {
    marginLeft: theme.spacing(3),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  notificationItem: {
    fontSize: 14,
    height: 20,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    '& span': {
      maxWidth: 300,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  deleteNotifBtn: {
    padding: theme.spacing(1),
    '& svg': {
      fontSize: 20,
    },
  },
});
