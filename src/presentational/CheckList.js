import React from "react";

function CheckList(props) {    
    // styles that will be invoked if the task is completed
    const completedStyle = {
        textDecoration: "line-through",
        fontStyle: "italic",
        fontWeight: 300,
        color: "#C0C0C0"
    };

    return (
        <div className="todo-item">                    
            <label style={props.data.completed ? completedStyle : null}>
                <input type="checkbox"
                    name={props.data._id}
                    checked={props.data.completed}
                    onChange={props.handleChange}
                />
                {props.data.description}
            </label>
        </div>
    )
}

export default CheckList;