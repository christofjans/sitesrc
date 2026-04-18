export function initMainTimeWidget(maintimeid: string) {
    let maintimeWidget = document.getElementById(maintimeid);
    
    setInterval(function(){
        if (maintimeWidget===null) return;
        let date = new Date();
        let msg = `${padLeft(date.getHours())}:${padLeft(date.getMinutes())}`;
        maintimeWidget.innerHTML = msg;
    }, 400);

}

export function initMainDateWidget(maindateid: string) {
    let maindateWidget = document.getElementById(maindateid);
    if (maindateWidget===null) return;

    let date = new Date();

    let dayOfWeekIdx = date.getDay();
    let dayOfMonth = date.getDate();
    let monthIdx = date.getMonth();
    
    let today = `${days[dayOfWeekIdx]}, ${months[monthIdx]} ${dayOfMonth}`;
    maindateWidget.innerHTML = today;
}

export function initUtcTimeWidget(utctimeid: string) {
    let utctimeWidget = document.getElementById(utctimeid);

    setInterval(function(){
        if (utctimeWidget===null) return;
        let date = new Date();
        let msg = `UTC ${padLeft(date.getUTCHours())}:${padLeft(date.getUTCMinutes())}`;
        utctimeWidget.innerHTML = msg;
    }, 400);

}

function padLeft(i: number) : string {
    return i<10 ? `0${i}` : `${i}`;
}

const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
