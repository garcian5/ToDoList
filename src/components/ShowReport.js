
import React from "react";

function ShowReport(Component) {
    return function WrappedComponent(props) {
        const [modalShow, setModalShow] = React.useState(false);
        return <Component {...props} myHookValue={[modalShow, setModalShow]} />;
    }
}

export default ShowReport;