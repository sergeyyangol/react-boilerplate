/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TopMenu from 'components/TopMenu';
import SidebarMenu from 'components/SidebarMenu';
import { makeSelectGlobal } from '../App/selectors';
import * as actions from '../App/actions';
import styles from './styles';

class PrivateRoute extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleToggleSidebarMenu = val => this.setState({ open: val });

  handleChangeTheme = val => this.props.changeThemeAction(val);

  render() {
    const { classes, global, children } = this.props;

    const { open } = this.state;
    return (
      <div className={classes.wrap}>
        <TopMenu
          open={open}
          handleToggleSidebarMenu={this.handleToggleSidebarMenu}
          handleChangeTheme={this.handleChangeTheme}
          themeName={global.theme}
        />
        <SidebarMenu
          open={open}
          themeName={global.theme}
          handleToggleSidebarMenu={this.handleToggleSidebarMenu}
        />
        <main
          id="main"
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
    );
  }
}

PrivateRoute.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  children: PropTypes.object,
  changeThemeAction: PropTypes.func,
};

const PrivateRouteStyled = withStyles(styles)(PrivateRoute);

export default connect(
  () =>
    createStructuredSelector({
      global: makeSelectGlobal(),
    }),
  dispatch => ({
    changeThemeAction: bindActionCreators(actions.changeThemeAction, dispatch),
    dispatch,
  }),
)(PrivateRouteStyled);
