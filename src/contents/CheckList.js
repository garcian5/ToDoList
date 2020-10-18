import React from "react";

class CheckList extends React.Component {
    render() {
        // styles that will be invoked if the task is completed
        const completedStyle = {
            textDecoration: "line-through",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#C0C0C0"
        };

        return (            
            <div>
                <div className="todo-item">                    
                    <label style={this.props.data.completed ? completedStyle : null}>
                        <input type="checkbox"
                            name={this.props.data.id}
                            checked={this.props.data.completed}
                            onChange={this.props.handleChange}
                        />
                        {this.props.data.text}
                    </label>
                </div>                
            </div>
        )
    }
}

export default CheckList;