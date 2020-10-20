import React from "react";
import ProgressModal from "../presentational/report/ProgressModal";
import ProgressSummary from "../presentational/report/ProgressSummary";

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
        <ProgressModal
            show={props.show}
            onHide={props.onHide}
            tod={props.tod}
            hod={props.hod}
            numtask={numTask}
            tasklength={taskLength}
            incompletetask={incompleteTask}
            completetask={completeTask}
        />
    )
}

export default ProgressReport;