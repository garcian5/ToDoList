import React from "react";
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressSummary from "./ProgressSummary";


/**
 * From: https://react-bootstrap.github.io/components/modal/
 * */
function ProgressReport(props) {
    /**
     * This method calculates the number of completed/checked tasks
     * returns: the number of the calculated completed tasks
     * */
    function calcTask() {
        let numTask=0;
        for (const item of props.tasks) {
            if (item.completed) {
                numTask++;
            }
        }
        return numTask;
    }

    /**
     * This method populates the ProgressSummary component depending on the completed status
     * given in the parameter trueOrFalse
     * For i.e. if the parameter given is true, the component will be populated with only the 
     * completed/checked tasks. If there are no complete tasks, it will simply return a null value.
     * @param {any} trueOrFalse
     */
    function getTaskStatus(trueOrFalse) {
        const status = props.tasks.map((data) => {
            if (data.completed === trueOrFalse) {
                return (
                    <ProgressSummary
                        key={data.id}
                        data={data}
                    />
                )
            }
            return null;
        });
        return status;
    }

    // variables to hold values
    const numTask = calcTask();
    const taskLength = props.tasks.length;

    const incompleteTask = getTaskStatus(false);
    const completeTask = getTaskStatus(true);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="progress-report"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your Progress As Of {props.hod}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4 className="progress-title">Progress Summary</h4>
                <p>
                    You have completed {numTask <= 0 ? `nothing` : `${numTask} out of ${taskLength} tasks`} in the To Do List as of this {props.tod}.
                </p>

                {/*
                * The first will render a list of completed task if there are any. 
                * If there are no completed task(s) it will simply tell the user they have not finished one yet.
                * 
                * The second will render a list of incomplete tasks if there any.
                * If there are no incomplete task(s) it will simply tell the user they have completed every task on the list.
                * */}
                {numTask !== 0 ? <span>Here are your completed tasks: {completeTask}</span> : <span>You have not completed any of your tasks!</span>}
                {numTask < taskLength ? <span>Here are your incomplete tasks: {incompleteTask}</span> : <span>Congratulations on completing all {taskLength} of your tasks!</span>}
            </Modal.Body>

        </Modal>
    )
}

export default ProgressReport;