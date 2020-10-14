import React from "react";

class ProgressSummary extends React.Component {
    render() {
        return (
            <section>
                <ul>
                    <li>{this.props.data.text}</li>
                </ul>                
            </section>
        )
    }
}

export default ProgressSummary;