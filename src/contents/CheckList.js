import React from "react"
import { timeOfDay } from "../scripts/timeOfDay";
import { hrOfDay } from "../scripts/timeOfDay";

function CheckList() {

    let tod = timeOfDay();
    let hod = hrOfDay();

    let cLstStyles = {
        backgroundColor: "#F6F39F"
    }

    if (tod === "afternoon") cLstStyles.backgroundColor = "#F6D69F";
    else if (tod === "night") cLstStyles.backgroundColor = "#3D3354";
    
    return (
        <div style={cLstStyles}>
            <h4>Good {tod}!</h4>
            <h4>It is currently {hod} in the {tod} where you are, here are your To Do List.</h4>
            
            <label id="label1" className="label1">
                List 1
                <input type="checkbox" id="lst1" />
            </label><br/>
            <label>
                List 2:
                <input type="checkbox" id="lst2" />
            </label><br />
            <label>
                List 3:
                <input type="checkbox" id="lst3" />
            </label><br />
            <label>
                List 4:
                <input type="checkbox" id="lst4" />
            </label>
        </div>
        )
}

export default CheckList;