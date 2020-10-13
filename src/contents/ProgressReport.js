import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


/**
 * This class component handles the modal box
 * From: https://react-bootstrap.github.io/components/modal/
 * */
class ProgressReport extends React.Component {

    render() {
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