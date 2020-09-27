import React from "react";
import CheckList from "../contents/CheckList";

function MainContent() {
    return (
        <main className="todo-list">
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
        </main>
        )
}

export default MainContent