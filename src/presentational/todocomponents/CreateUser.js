import React from "react";
import axios from 'axios';

class CreateUser extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            newuser: '',
            users: [],
            enteredUser: false,
            userExists: false
        }
    } 

    componentDidMount() {
        // get users to show in dropdown menu
        axios.get('http://localhost:5000/users/')
            .then(response => {
                // check if there is at least 1 user in the database
                if (response.data.length > 0) {
                    this.setState({
                        // map the array of users and return the array to define users
                        users: response.data.map(user => user.username)
                    })
                }
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSelSubmit = (event) => {
        event.preventDefault();
        this.setState({
            enteredUser: true
        })
    }

    handleNewUserSubmit = (event) => {
        event.preventDefault();

        // collects a list of usernames if there is a match
        // to handle case sensitivity, we convert usernames to uppercase so
        // that no sensitive cases are included in the comparison logic
        const existInDB = this.state.users.filter((users) => { return users.toUpperCase() === this.state.newuser.toUpperCase() });
        // if this username already exists in the database, it will not add
        if (existInDB.length <= 0) {
            console.log(" User does not exist");

            /*const user = {
                username: this.state.newuser
            }*/

            axios.post('http://localhost:5000/users/add', { username: this.state.newuser })
                .then(res => console.log(res.data))

            this.setState({
                userExists: false                
            })
        } else {
            console.log(" User already exists!");
            this.setState({ userExists: true })
        }
        window.location = '/' + this.state.newuser
    }
   

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSelSubmit}>
                    <div className="form-group">
                        <label>Choose From Users: </label>
                        <select
                            required
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChange}
                        >
                            <option>Please Select a Username</option>
                            {// lists out all options from user list
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>                            
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            value="Select User"
                            className="btn btn-primary" />
                    </div>
                </form>

                <h4>OR</h4>

                <form onSubmit={this.handleNewUserSubmit}>
                    <div className="form-group">
                        <label>Create a Username: </label>
                        <input type="text"
                            name="newuser"
                            className="form-control"
                            value={this.state.newuser}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            value="Create User"
                            className="btn btn-primary" />
                    </div>
                </form>
                {this.state.userExists ?
                    <p>User Already Exists! Please Try A Different Name.</p>
                    : null
                }
                {this.state.enteredUser ?
                    window.location = '/' + this.state.username
                    //this.props.history.push('/' + this.state.username)
                    : null
                }
            </div>
        )        
    }
}

export default CreateUser;