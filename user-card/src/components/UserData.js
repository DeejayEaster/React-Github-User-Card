import React, { Component } from "react";
import axios from "axios";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      followersData: null
    };
  }

  componentDidMount() {
    const userData = axios
      .get("https://api.github.com/users/deejayeaster", {})
      .then(res => {
        console.log("data", res.data);
        this.setState({ userData: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });

    const userFollowers = axios
      .get("https://api.github.com/users/deejayeaster/followers")
      .then(res => {
        console.log("follower data: ", res.data);
        this.setState({ followersData: res.data });
      })
      .catch(err => console.log("follower error", err));
  }

  render() {
    console.log("state userData", this.state.userData);
    return <div />;
  }
}

export default UserData;
