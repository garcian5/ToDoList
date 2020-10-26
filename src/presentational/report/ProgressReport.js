import React from "react";
import { Link } from "react-router-dom";
const ProgressReport = (props) => {
    console.log(props.numtask);
    return (
        <div>
            <p>Progress Report!</p>
            <p>This page will be used to log full progress data.</p>
            <p>Go Back to Main</p>
            <Link to='/'>Main</Link>

        </div>
    )
}

export default ProgressReport;