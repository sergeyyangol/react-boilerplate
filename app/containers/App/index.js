/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
import Header from '../Header';

import reducer from './reducer';
// import saga from './saga';
import { makeSelectGlobal } from './selectors';

import GlobalStyle from '../../global-styles';
import darkTheme from '../../themes/dark-theme';
import lightTheme from '../../themes/light-theme';
import routes from '../../router';

function App({ global: { theme } }) {
  const key = 'global';
  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  const getTheme = storeTheme => {
    let chosenTheme;
    if (storeTheme === 'light') chosenTheme = lightTheme;
    else if (storeTheme === 'dark') chosenTheme = darkTheme;
    return chosenTheme;
  };

  return (
    <Fragment>
      <MuiThemeProvider theme={getTheme(theme)}>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header>{routes()}</Header>
        <GlobalStyle />
      </MuiThemeProvider>
    </Fragment>
  );
}

App.propTypes = {
  global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
