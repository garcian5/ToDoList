import React from "react"

function CheckList() {    
    return (
        <div>            

            <div className = "todo-item">
                <label id="label1">
                    List 1
                    <input type="checkbox" id="lst1" />
                </label><br/>                
            </div>
        </div>
        )
}

export default CheckList;