import React, { Component } from "react";

export default class UserFollowersCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.follower.avatar_url}
          alt="follower-card"
        />
        <div className="card-body">
          <h5 className="card-title">Username : {this.props.follower.login}</h5>
        </div>
      </div>
    );
  }
}
