import React from "react"

function CheckList() {

    // checks time if it's morning, afternoon or night
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    return (        
        <div>
            <h4>Good {timeOfDay}!</h4>
            <h4>It is currently {hours} o'clock in the {timeOfDay} where you are, here are your To Do List.</h4>
            
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