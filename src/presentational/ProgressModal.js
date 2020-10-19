import React from "react";
import Modal from 'react-bootstrap/Modal';

/**
 * From: https://react-bootstrap.github.io/components/modal/
 * Will return a modal view of the progress summary if the to do list is populated
 * Will return a message if it is empty.
 * */
function ProgressModal(props) {
    if (props.tasklength > 0) {
        return (
            <section>
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
                        <p>
                            You have completed {props.numtask <= 0 ? `nothing` : `${props.numtask} out of ${props.tasklength} tasks`} in the To Do List as of this {props.tod}.
                        </p>

                        {/*
                        * The first will render a list of completed task if there are any. 
                        * If there are no completed task(s) it will simply tell the user they have not finished one yet.
                        * 
                        * The second will render a list of incomplete tasks if there any.
                        * If there are no incomplete task(s) it will simply tell the user they have completed every task on the list.
                        */}

                        {props.numtask !== 0 ? <span>Here are your completed tasks: {props.completetask}</span> : <span>You have not completed any of your tasks!</span>}<br />
                        {props.numtask < props.tasklength ? <span>Here are your incomplete tasks: {props.incompletetask}</span> : <span>Congratulations on completing all {props.tasklength} of your tasks!</span>}<br />
                    </Modal.Body>

                </Modal>
            </section>
        )
    } else {
        return (
            <section>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName="progress-report"
                >
                    <Modal.Header closeButton>                    
                    </Modal.Header>

                    <Modal.Body>
                        <p style={{ fontSize: 30 }}>You have no tasks entered as of right now.</p>
                        <p>Please exit this enter a task to start.</p>
                    </Modal.Body>

                </Modal>
            </section>
        )
    }
}

export default ProgressModal;