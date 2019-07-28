/* DARK THEME */
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      mainBgColor: '#6A6A6A',
      chipBgColor: '#4a4a4a',
    },
  },
  typography: {
    useNextVariants: true,
  },
});
