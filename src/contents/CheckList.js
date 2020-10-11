import React from "react"

class CheckList extends React.Component {    
    render() {
        // styles that will be invoked if the task is completed
        const completedStyle = {
            textDecoration: "line-through",
            fontStyle: "italic",
            color: "#C0C0C0"
        };

        return (
            <div>
                <div className="todo-item">                    
                    <input className="chk-box" type="checkbox"
                        checked={this.props.data.completed}
                        onChange={() => this.props.handleChange(this.props.data.id)}
                    />
                    <label style={this.props.data.completed ? completedStyle : null}>{this.props.data.text}</label>
                </div>
            </div>
        )
    }
}

export default CheckList;