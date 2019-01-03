import React from "react";
import { Link } from "react-router-dom";
import MessageTimeine from "./MessageTimeline";

const Homepage = ({currentUser}) => {
  if(!currentUser.isAuthenticated){
    return(
      <div className="home-hero">
        <div className="container">
          <h1>What's Happening?</h1>
          <h4>New to Warbler?</h4>
          <Link to="/signup" className="btn btn-primary">Sign up here!</Link>
        </div>
      </div>
    )
  }
  return <h1><MessageTimeine profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username} /></h1>
}

export default Homepage;