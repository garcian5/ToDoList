import React from "react";
import CheckList from "../contents/CheckList";
import toDoData from "../data/tododata"

class MainContent extends React.Component {

    render() {
        const checkList = toDoData.map((data) => {
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