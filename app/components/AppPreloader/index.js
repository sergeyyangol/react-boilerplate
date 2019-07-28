/**
 *
 * AppPreloader
 * -----------------
 * Note: For the container HTML, in which this component should be located,
 * it is necessary to specify the 'position' property with the value 'relative' in the styles
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';

function AppPreloader({ classes, size, type }) {
  return (
    <div className={classes.wrap}>
      <div className={type === 'outside' ? classes.boxOutside : null}>
        <CircularProgress
          size={size === 'big' ? 60 : 40}
          thickness={size === 'big' ? 3.2 : 3.6}
        />
      </div>
    </div>
  );
}

AppPreloader.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.string,
  type: PropTypes.string,
};

const AppPreloaderStyled = withStyles(styles)(AppPreloader);

export default AppPreloaderStyled;
