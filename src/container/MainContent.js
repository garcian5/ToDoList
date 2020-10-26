import React, {Component} from "react";
import CheckList from "../presentational/CheckList";
import GreetingClock from "../container/GreetingClock";
import AddToDo from "../presentational/AddToDo";
import axios from 'axios';

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            clist: [], // copy of tododata in object state
            enteredToDo: "",
            btnClicked: false,
            isValid: true,
            username: ''
        }
        // bind the method made to our own class to avoid a typeerror
        //this.handleChange = this.handleChange.bind(this);
    }    

    componentDidMount() {        
        //console.log(this.props);
        let userid = this.props.match.params.user_id;   
        
        // get users to show in dropdown menu
        axios.get('http://localhost:5000/todos/')
            .then(response => {
                this.setState({
                    username: userid,
                    // filter all data that has other username                    
                    clist: response.data.filter((data) => { return data.username === userid; })
                })
            })        
    }

    /**
     * A method that handles the if the checkbox is clicked or not and handles inputs.
     * changed to arrow function so we don't have to bind the method.
     * @param {any} event
     */
    handleChange = (event) => {
        const { name, value, type} = event.target;

        // check if the type of input is checkbox or not
        type === "checkbox" ?
            this.setState(prevState => {
                const updatedTodos = prevState.clist.map(clist => {
                    // return the same clist object with flipped completed value if the id is the same
                    // and update database
                    // return the same clist object with no change if not.
                    if (clist._id === name) {
                        const temp_clist = { ...clist, completed: !clist.completed }
                        axios.post('http://localhost:5000/todos/update/' + temp_clist._id, temp_clist)
                            .then(res => console.log(res.data));
                        return temp_clist;
                    } else return clist;
                })
                // return the updated list
                return {
                    clist: updatedTodos
                }
            })
            // if we're not handling a checkbox, set the value of the entered to do
            : this.setState({
                [name]: value
            })
    }    

    /**
     * This method handles the submitted input.
     * This will populate the clist state when a submit is entered.
     * Will not submit if user doesn't enter anything.
     * @param {any} event
     */
    handleSubmit = (event) => {
        // to prevent the page from refreshing on submit
        // when we don't let this reload it will not update keys
        //event.preventDefault(); 

        const todolst = {
            username: this.state.username,
            description: this.state.enteredToDo,
            completed: false,
            date: new Date()
        }

        // update state and add to the database
        if (this.state.enteredToDo.trim() !== "") {
            axios.post('http://localhost:5000/todos/add', todolst)
                .then(res =>
                    this.setState({
                        clist: this.state.clist.concat(todolst),
                        btnClicked: !this.state.btnClicked,
                        enteredToDo: "",
                        isValid: true
                    })
                );
            
        } else this.setState({ isValid: false })
    }

    /**
     * This method handles plus button click
     * */
    handleClick = () => this.setState({ btnClicked: !this.state.btnClicked, enteredToDo: "", isValid: true })

    render() {
        // map through the todo list data and pass them as props
        // to the checklist component
        const checkList = this.state.clist.map((data) => {
            return (
                <React.Fragment key={data._id}>
                    <CheckList
                        key={data._id}
                        data={data}
                        handleChange={this.handleChange}
                    />
                </React.Fragment>
            )
        });
        return (
            <main>
                <GreetingClock
                    tasks={this.state.clist}
                    username={this.state.username}
                />

                <div className="outer-btn-circle add-todo">
                    <button className="addtodo-btn" onClick={this.handleClick}>
                        <ion-icon name="add-outline" class="ion-plus"></ion-icon>
                    </button>
                    <br />
                </div>

                {this.state.btnClicked ?
                    <AddToDo
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        value={this.state.enteredToDo}
                    />
                    : null}

                {!this.state.isValid ?
                    <p>Please enter a valid task.</p>                    
                    : null}

                <div className="todo-list">
                    {checkList.length > 0 ? checkList : <p>You have no entered tasks.</p>}
                </div>
            </main>                
        )
    }
}

export default MainContent