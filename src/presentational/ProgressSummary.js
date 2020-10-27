import React from "react";

function ProgressSummary (props) {
    return (
        <section>
            <ul>
                <li>{props.data.text}</li>
            </ul>                
        </section>
    )
}

export default ProgressSummary;