import React from "react";

function AddToDo(props) {
    //const [clicked, setClicked] = useState(false);

    return (
        <div className="outer-btn-circle add-todo">
            <form onSubmit={props.handleSubmit}>
                <input type="text"
                    name="enteredToDo"
                    value={props.value}
                    placeholder="Enter your To Do"
                    onChange={props.handleChange}
                />
                <button>Submit</button>
            </form>           
        </div>
    )
}

export default AddToDo;