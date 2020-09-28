import React from "react"

class CheckList extends React.Component {
    render() {
        return (
            <div>

                <div className="todo-item">
                    <label id="label1">
                        <input className="chk-box" type="checkbox" checked={this.props.data.completed} />
                        {this.props.data.text}
                    </label><br />
                </div>
            </div>
        )
    }
}

export default CheckList;