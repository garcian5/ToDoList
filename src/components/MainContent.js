import React from "react";
import CheckList from "../contents/CheckList";
import toDoData from "../data/tododata"

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            clist: toDoData
        }
    }
    render() {
        // map through the todo list data and pass them as props
        // to the checklist component
        const checkList = this.state.clist.map((data) => {
            return (
                <CheckList
                    key={data.id}
                    data={data}
                />
            )
        });

        return (
            <main className="todo-list">
                {checkList}
            </main>
        )
    }
}

export default MainContent