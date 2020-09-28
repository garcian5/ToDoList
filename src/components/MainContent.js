import React from "react";
import CheckList from "../contents/CheckList";
import toDoData from "../data/tododata"

function MainContent() {

    const checkList = toDoData.map((data) => {
        return (
            <CheckList
                key={data.id}
                text={data.text}
                completed={data.completed}
            />
        )
    });

    return (
        <main className="todo-list">
            {checkList}
        </main>
        )
}

export default MainContent