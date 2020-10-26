import React from "react";

function ProgressSummary (props) {
    return (
        <section>
            <ul>
                <li>{props.data.description}</li>
            </ul>                
        </section>
    )
}

export default ProgressSummary;