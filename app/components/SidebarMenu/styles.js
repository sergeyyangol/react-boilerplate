const drawerWidth = 240;

export default theme => ({
  drawerPaper: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerBgLight: {
    background: theme.palette.primary.main,
  },
  drawerBgDark: {
    background: theme.palette.background.paper,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(1) / 2,
    borderBottom: `1px solid ${theme.palette.divider}`,
    ...theme.mixins.toolbar,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  menuIcon: {
    color: theme.palette.primary.contrastText,
  },
  expandIcon: {
    position: 'absolute',
    top: '50%',
    right: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    transform: 'translateY(-50%)',
    transition: theme.transitions.create(['right', 'font-size'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  expandIconClose: {
    right: theme.spacing(1),
    fontSize: 20,
    transition: theme.transitions.create(['right', 'font-size'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  listItem: {
    color: theme.palette.primary.contrastText,
  },
});
