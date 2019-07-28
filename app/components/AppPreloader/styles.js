export default theme => ({
  wrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  boxOutside: {
    padding: theme.spacing(2),
    borderRadius: '50%',
    background: '#fff',
    boxShadow: '0 0 75px 75px rgba(255, 255, 255, 1)',
  },
});
