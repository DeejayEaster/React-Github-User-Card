import React, { Component } from "react";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.user.avatar_url}
          alt="user-card"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.user.login}</h5>
          <p className="card-text">Bio : {this.props.user.bio}</p>
        </div>
      </div>
    );
  }
}
