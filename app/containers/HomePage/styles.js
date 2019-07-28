import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

export default theme => ({
  title: {
    marginTop: 0,
    ...theme.typography.h5,
  },
  firstDataListWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: `${theme.spacing(5)}px 0 ${theme.spacing(3)}px`,
    width: '100%',
    '& > div': {
      '&:nth-child(1) div[class*="iconBox"]': { background: orange[500] },
      '&:nth-child(2) div[class*="iconBox"]': { background: green[500] },
      '&:nth-child(3) div[class*="iconBox"]': { background: cyan[500] },
      '&:nth-child(4) div[class*="iconBox"]': { background: pink[500] },
    },
  },
});
