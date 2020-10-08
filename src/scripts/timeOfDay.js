// checks time if it's morning, afternoon or night
export const timeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    let TOD;

    if (hours < 12) {
        TOD = "morning";
    } else if (hours >= 12 && hours < 17) {
        TOD = "afternoon";
    } else {
        TOD = "night";
    }

    return TOD;
}

/**
 * calculate the Time of the day and return a readable time.
 * */
export const hrOfDay = () => {
    const date = new Date();
    let hour = date.getHours();
    let tod;
    if (hour > 12) {
        tod = 'pm';
        hour -= 12;
    } else if (hour === 0) {
        tod = 'am';
        hour = 12;
    } else {
        tod = 'am';
    }
    //let time = `${hour}:${date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()}:${date.getSeconds()} ${tod}`;
    let time = `${hour}:${date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()} ${tod}`;    
    return time;
}

export const styling = () => {
    let cLstStyles = {
        backgroundColor: "rgba(186, 152, 3, 0.32)",
        margin: "auto",
        height: 250,
        width: 350,
        borderRadius: "50%"
    };
    return cLstStyles;
}