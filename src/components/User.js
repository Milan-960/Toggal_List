import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("User Unmount!!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// // };
// Above code is Functional component

export default User;
