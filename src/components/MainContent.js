import React from "react";
import CheckList from "../contents/CheckList";
import toDoData from "../data/tododata";
import GreetingClock from "../components/GreetingClock";

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            clist: toDoData // copy of tododata in object state
        }
        // bind the method made to our own class to avoid a typeerror
        //this.handleChange = this.handleChange.bind(this);
    }

    /**
     * A method that handles the if the checkbox is clicked or not.
     * Changes the state of the box to clicked or not clicked.
     * changed to arrow function so we don't have to bind the method
     * */
    handleChange = (lst_id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.clist.map(clist => {
                // return the same clist object with flipped completed value if the id is the same
                // return the same clist object with no change if not.
                return clist.id === lst_id ? { ...clist, completed: !clist.completed } : clist;
            })

            // return the updated list
            return {
                clist: updatedTodos
            }
        })
    }

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
                <div className="todo-list">
                    {checkList}
                </div>
            </main>
        )
    }
}

export default MainContent