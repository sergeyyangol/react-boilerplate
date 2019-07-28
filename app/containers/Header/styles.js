export default theme => ({
  wrap: {
    display: 'flex',
    minHeight: '100vh',
    background: theme.palette.background.mainBgColor,
  },
  content: {
    overflow: 'hidden',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});
