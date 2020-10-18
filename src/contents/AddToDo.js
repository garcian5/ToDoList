import React, { useState } from "react";

function AddToDo(props) {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="outer-btn-circle add-todo">
            <button className="addtodo-btn" onClick={() => setClicked(!clicked)}>
                <ion-icon name="add-outline"></ion-icon>
            </button>
            <br />
            {clicked ?
                <form onSubmit={props.handleSubmit}>
                    <input type="text"
                        name="enteredToDo"
                        value={props.value}
                        placeholder="Enter your To Do"
                        onChange={props.handleChange}
                    />
                    <button>Submit</button>
                </form>
             : null}            
        </div>
    )
}

export default AddToDo;