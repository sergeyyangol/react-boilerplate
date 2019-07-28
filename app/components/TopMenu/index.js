/**
 *
 * Header
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Typography from '@material-ui/core/Typography/Typography';
import Badge from '@material-ui/core/Badge/Badge';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import _ from 'lodash';
import FormLabel from '@material-ui/core/FormLabel';
import {
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  MoreVert as MoreIcon,
  Settings as SettingsIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import styles from './styles';

class TopMenu extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    handleToggleSidebarMenu: PropTypes.func,
    handleChangeTheme: PropTypes.func,
    themeName: PropTypes.string,
  };

  state = {
    notificationEl: null,
    mobileMoreAnchorEl: null,
    settingsEl: null,
    themeValue: this.props.themeName,
    notificationsData: [
      'Notification',
      'Some text',
      'Some cool text',
      'Good weather',
    ],
  };

  handleMenuClose = () => {
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = e =>
    this.setState({ mobileMoreAnchorEl: e.currentTarget });

  handleMobileMenuClose = () => this.setState({ mobileMoreAnchorEl: null });

  handleNotificationClose = () => this.setState({ notificationEl: null });

  handleOpenSidebarMenu = () => {
    const { handleToggleSidebarMenu } = this.props;
    handleToggleSidebarMenu(true);
  };

  handleChangeTheme = e => {
    const { handleChangeTheme } = this.props;
    this.setState({ themeValue: e.target.value }, () =>
      handleChangeTheme(this.state.themeValue),
    );
  };

  handleSettingsClose = () => this.setState({ settingsEl: null });

  handleSettingsOpen = e => this.setState({ settingsEl: e.currentTarget });

  handleNotificationOpen = e => {
    const { notificationsData } = this.state;
    this.setState({
      notificationEl: notificationsData.length > 0 ? e.currentTarget : null,
    });
  };

  handleDeleteNotificationItem = item => {
    const { notificationsData } = this.state;
    this.setState(
      { notificationsData: _.remove(notificationsData, n => n !== item) },
      () => {
        if (this.state.notificationsData.length === 0)
          this.handleNotificationClose();
      },
    );
  };

  render() {
    const {
      notificationEl,
      mobileMoreAnchorEl,
      settingsEl,
      themeValue,
      notificationsData,
    } = this.state;
    const { classes, open, themeName } = this.props;
    const isNotificationOpen = Boolean(notificationEl);
    const isSettingsOpen = Boolean(settingsEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderNotification = (
      <Menu
        anchorEl={notificationEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationOpen}
        onClose={this.handleNotificationClose}
      >
        {_.map(notificationsData, (n, i) => (
          <MenuItem key={i} className={classes.notificationItem}>
            <span>{n}</span>
            <IconButton
              color="secondary"
              className={classes.deleteNotifBtn}
              onClick={() => this.handleDeleteNotificationItem(n)}
            >
              <DeleteIcon />
            </IconButton>
          </MenuItem>
        ))}
      </Menu>
    );
    const renderSettings = (
      <Menu
        anchorEl={settingsEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isSettingsOpen}
        onClose={this.handleSettingsClose}
      >
        <MenuItem style={{ height: 'auto' }}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" style={{ marginBottom: 4 }}>
              <Typography>Theme:</Typography>
            </FormLabel>
            <RadioGroup
              aria-label="App Theme"
              name="appTheme"
              value={themeValue}
              onChange={this.handleChangeTheme}
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
                style={{ marginBottom: -8 }}
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            </RadioGroup>
          </FormControl>
        </MenuItem>
      </Menu>
    );
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={notificationsData.length} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
      </Menu>
    );

    return (
      <Fragment>
        <AppBar
          position="fixed"
          className={classNames(
            classes.appBar,
            {
              [classes.appBarBgLight]: themeName === 'light',
              [classes.appBarBgDark]: themeName === 'dark',
            },
            {
              [classes.appBarShift]: open,
            },
          )}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleOpenSidebarMenu}
              className={classNames(classes.menuButton, {
                [classes.menuButtonHide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.headerTitle}
            >
              Project Engine
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton onClick={this.handleNotificationOpen} color="inherit">
                <NotificationsIcon />
              </IconButton>
              <IconButton onClick={this.handleSettingsOpen} color="inherit">
                <SettingsIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderNotification}
        {renderSettings}
        {renderMobileMenu}
      </Fragment>
    );
  }
}

const TopMenuStyled = withStyles(styles)(TopMenu);

export default TopMenuStyled;
