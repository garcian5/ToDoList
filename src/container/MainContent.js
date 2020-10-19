import React, {Component} from "react";
import CheckList from "../presentational/CheckList";
import GreetingClock from "../container/GreetingClock";
import AddToDo from "../presentational/AddToDo"

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            clist: [], // copy of tododata in object state
            enteredToDo: "",
            btnClicked: false,
            isValid: true
        }
        // bind the method made to our own class to avoid a typeerror
        //this.handleChange = this.handleChange.bind(this);
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
                    // return the same clist object with no change if not.
                    // parseInt to convert string name to integer (10 is to specify it as a whole number)
                    return clist.id === parseInt(name, 10) ? { ...clist, completed: !clist.completed } : clist;
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
        event.preventDefault();

        this.state.enteredToDo.trim() !== "" ?
            this.setState({
                clist: this.state.clist.concat({
                    id: this.state.clist.length + 1,
                    text: this.state.enteredToDo,
                    completed: false
                }),
                btnClicked: !this.state.btnClicked,
                enteredToDo: "",
                isValid: true
            })
            : this.setState({ isValid: false })
    }

    /**
     * This method handles plus button click
     * */
    handleClick = () => this.setState({ btnClicked: !this.state.btnClicked, isValid: true })

    render() {
        // map through the todo list data and pass them as props
        // to the checklist component
        const checkList = this.state.clist.map((data) => {
            return (
                <CheckList
                    key={data.id}
                    data={data}
                    handleChange={this.handleChange}
                />
            )
        });
        return (
            <main>
                <GreetingClock
                    tasks={this.state.clist}
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