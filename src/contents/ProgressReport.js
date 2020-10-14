import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


/**
 * This class component handles the modal box
 * From: https://react-bootstrap.github.io/components/modal/
 * */
class ProgressReport extends React.Component {

    calcTask() {
        let numTask=0;
        for (const item of this.props.tasks) {
            if (item.completed) {
                numTask++;
            }
        }
        return numTask;
    }

    getInCompleteTasks() {
        let incomp=[];
        for (const item of this.props.tasks) {
            if (!item.completed) {
                incomp.push(item.text);
            }
        }
        return incomp;
    }

    render() {
        const task = this.calcTask();
        const taskLength = this.props.tasks.length;
        const inComp = this.getInCompleteTasks();

        let listInComplete;
        if (inComp > 0) {
            listInComplete = inComp.map(function (data) {
                return (
                    <ol>
                        <li>data.tasks</li>
                    </ol>
                );
            });
        }
        // create another component to list the tasks
        //console.log(listInComplete);
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Your Progress As Of {this.props.hod}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4>Tasks Completed</h4>
                    <p>
                        You have completed {task <= 0 ? `nothing as of this ${this.props.tod}` : `${task} out of ${taskLength}`} tasks in the To Do List.
                        {listInComplete !== undefined ? listInComplete : 'Congratulations on completing all your tasks!'}
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}

export default ProgressReport;