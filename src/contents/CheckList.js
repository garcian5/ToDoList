import React from "react"

class CheckList extends React.Component {
    constructor() {
        super();
        this.state = {
            complete: false
        }
        // bind the method made to our own class to avoid a typeerror
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * A method that handles the if the checkbox is clicked or not.
     * Changes the state of the box to clicked or not clicked.
     * */
    handleChange() {
        this.setState({ complete: !this.state.complete })
    }

    render() {
        return (
            <div>

                <div className="todo-item">
                    <label id="label1">
                        <input className="chk-box" type="checkbox"
                            onChange={this.handleChange}
                            defaultChecked={this.props.data.completed} />
                        {this.props.data.text}
                    </label><br />
                </div>
            </div>
        )
    }
}

export default CheckList;