import { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";

// const DUMMY_USERS = [
//   { id: "u1", name: "Milan" },
//   { id: "u2", name: "Kush" },
//   { id: "u3", name: "Gandu" },
//   { id: "u3", name: "Hardik" },
// ];

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // send HTTp Request
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevPorps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input
            type="search"
            placeholder="Search...."
            onChange={this.searchChangeHandler.bind(this)}
          />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//         <Users users={filteredUsers} />
//       </div>
//     </Fragment>
//   );
// };

export default UserFinder;
