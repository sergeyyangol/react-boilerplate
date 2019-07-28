/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
// import { changeUsername } from './actions';
import { makeSelectGlobal } from '../App/selectors';
import reducer from './reducer';
// import saga from './saga';
import styles from './styles';
import messages from './messages';

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <h2>
        <FormattedMessage {...messages.startProjectHeader} />
      </h2>
      <p>
        <FormattedMessage {...messages.startProjectMessage} />
      </p>
    </article>
  );
}

HomePage.propTypes = {
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
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

const HomePageStyled = withStyles(styles)(HomePage);

export default compose(
  withConnect,
  memo,
)(HomePageStyled);
