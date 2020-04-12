//console.log(module);
//jshint esversion:6


module.exports.currentDayStr = currentDayStr;

module.exports.globalDateDayYear = globalDateDayYear;



 function globalDateDayYear() {
    

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let today = new Date(); // Sat Apr 11 2020 14:43:05 GMT+0200 (Central European Summer Time)
    return Myday = today.toLocaleDateString("en-US",options);
}

 function currentDayStr() {

    let today = new Date();

    const weekdays = ["monday","tuesday","wednesday","thurday","friday","saturday","sunday"];
    return day = weekdays[today.getDay()];
    
}


console.log(module.exports);