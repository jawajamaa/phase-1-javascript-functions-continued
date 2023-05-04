
function saturdayFun(funActivity="roller-skate") {
    return `This Saturday, I want to ${funActivity}!`;
}

function mondayWork(funWeek="go to the office") {
    return `This Monday, I will ${funWeek}.`;
}

function wrapAdjective(style = "*"){
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`;
    } 
}

/*
wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a hard worker");

let defaultActivity = "roller-skate";

function saturdayFun(funActivity) {
    console.log(funActivity);
    if (funActivity === undefined) {
    return (`This Saturday, I want to ${defaultActivity}!`);
    } 
    else {
    return (`This Saturday, I want to ${funActivity}!`);
    }
}
*/

