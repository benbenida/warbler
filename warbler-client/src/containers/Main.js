import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = props => {
  const {authUser, errors, removeError, currentUser} = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props}/>} />
        <Route exact path="/signin" render={props => (
          <AuthForm 
            removeError={removeError} 
            errors={errors} 
            onAuth={authUser} 
            buttonText="Login" 
            heading="Welcome Back!" 
            {...props}
          />
        )} />
        <Route exact path="/signup" render={props => (
          <AuthForm 
            removeError={removeError} 
            errors={errors} 
            onAuth={authUser} 
            signUp 
            buttonText="Sign me up" 
            heading="Join Warbler today!" 
            {...props}
          />
        )} />
        <Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
      </Switch>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    errors: reduxState.errors
  }
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));