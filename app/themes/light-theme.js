/* LIGHT THEME */
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'light',
    background: {
      mainBgColor: '#fafafa',
      chipBgColor: '#ffffff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});
