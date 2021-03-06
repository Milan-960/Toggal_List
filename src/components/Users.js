import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Milan" },
//   { id: "u2", name: "Jay" },
//   { id: "u3", name: "Gandu" },
//   { id: "u3", name: "Hardik" },
// ];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }
  toggleUsersHandler() {
    //  this.state.showUsers = false
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? " Goback" : "Press here to see Users"}
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };
// };

export default Users;
