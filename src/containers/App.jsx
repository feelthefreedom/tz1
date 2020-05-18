import React, { Component } from "react";
import { connect } from "react-redux";
import News from "../components/News";
import SignUp from "../components/Auth/signup/signup";
import Login from "../components/Auth/login/login";
import { setJwtToken } from "../actions/TokenAction";
import { setCurrentUser } from "../actions/UserAction";
import { setIsCheckingLogPass } from "../actions/isCheckingLogPassAction";
import Profile from "../components/Profile";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { checkAuth } from "../components/checkAuth";
const PrivateRoute = ({ children, token, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        checkAuth(children.props.token) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    const {
      setTokenAction,
      setCurrentUserAction,
      setIsCheckingLogPassAction,
      isCheckingLogPass,
      currentUser,
      token,
      news,
      getNewsAction,
      isLoading,
    } = this.props;

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/news">News Page</Link>
            </li>
            <li>
              <Link to="/profile">Profile Page</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <Route path="/news">
            <News news={news} getNews={getNewsAction} isLoading={isLoading} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login
              setToken={setTokenAction}
              setCurrentUser={setCurrentUserAction}
              setIsCheckingLogPass={setIsCheckingLogPassAction}
              isCheckingLogPass={isCheckingLogPass}
            />
          </Route>
          <PrivateRoute path="/profile">
            <Profile token={token} currentUser={currentUser} />
          </PrivateRoute>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    news: store.news.news,
    isLoading: store.news.isLoading, // TODOS имеет ли смысл дополнительно вытаскивать isLoading или вытаскивать лишь news: store.news
    isCheckingLogPass: store.isCheckingLogPass,
    currentUser: store.currentUser.currentUser,
    token: store.token.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTokenAction: (token) => dispatch(setJwtToken(token)),
    setCurrentUserAction: (user) => dispatch(setCurrentUser(user)),
    setIsCheckingLogPassAction: (isChecking) =>
      dispatch(setIsCheckingLogPass(isChecking)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
