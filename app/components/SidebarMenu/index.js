/**
 *
 * SidebarMenu
 *
 */

import React from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Collapse from '@material-ui/core/Collapse/Collapse';
import Drawer from '@material-ui/core/Drawer/Drawer';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  SupervisedUserCircleOutlined,
  PlaylistAdd,
  ExpandMore,
  ExpandLess,
  Close as CloseIcon,
  Home,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class SidebarMenu extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    handleToggleSidebarMenu: PropTypes.func,
    themeName: PropTypes.string,
  };

  state = {
    openSubmenu: false,
  };

  handleToggleSubmenu = () => {
    const { openSubmenu } = this.state;
    this.setState({ openSubmenu: !openSubmenu });
  };

  render() {
    const { openSubmenu } = this.state;
    const { classes, open, handleToggleSidebarMenu, themeName } = this.props;
    return (
      <Drawer
        variant="permanent"
        open={open}
        className={classNames(classes.drawerPaper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames(
            {
              [classes.drawerBgLight]: themeName === 'light',
              [classes.drawerBgDark]: themeName === 'dark',
            },
            {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            },
          ),
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={() => handleToggleSidebarMenu(false)}
            className={classes.menuIcon}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          <ListItem>
            <Link to="/" className={classes.link} />
            <ListItemIcon className={classes.menuIcon}>
              <Home />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              classes={{ primary: classes.listItem }}
            />
          </ListItem>
          <ListItem button onClick={this.handleToggleSubmenu}>
            <ListItemIcon className={classes.menuIcon}>
              <SupervisedUserCircleOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Project"
              classes={{ primary: classes.listItem }}
            />
            {openSubmenu ? (
              <ExpandLess
                className={classNames(classes.expandIcon, {
                  [classes.expandIconClose]: !open,
                })}
              />
            ) : (
              <ExpandMore
                className={classNames(classes.expandIcon, {
                  [classes.expandIconClose]: !open,
                })}
              />
            )}
          </ListItem>
          <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Link to="/my-project" className={classes.link} />
                <ListItemIcon className={classes.menuIcon}>
                  <PlaylistAdd />
                </ListItemIcon>
                <ListItemText
                  primary="My Project"
                  classes={{ primary: classes.listItem }}
                />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    );
  }
}

const SidebarMenuStyled = withStyles(styles)(SidebarMenu);

export default SidebarMenuStyled;
