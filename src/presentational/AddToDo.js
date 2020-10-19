import React from "react";

function AddToDo(props) {
    //const [clicked, setClicked] = useState(false);

    return (
        <div className="outer-btn-circle add-todo">
            <form onSubmit={props.handleSubmit}>
                <input className="add-todo-input"
                    type="text"
                    name="enteredToDo"
                    value={props.value}
                    placeholder="Enter your To Do"
                    onChange={props.handleChange}
                    autoFocus
                    onFocus={e => e.currentTarget.select()}
                />
                <button className="add-todo-form-btn">Submit</button>
            </form>           
        </div>
    )
}

export default AddToDo;