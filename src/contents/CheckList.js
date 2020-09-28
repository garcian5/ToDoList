import React from "react"

function CheckList(props) {
    return (
        <div>            

            <div className = "todo-item">
                <label id="label1">
                    {props.text}
                    <input type="checkbox" id="lst1" checkedAttr={props.completed} />
                </label><br/>                
            </div>
        </div>
        )
}

export default CheckList;