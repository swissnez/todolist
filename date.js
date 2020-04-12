//console.log(module);
//jshint esversion:6



exports.globalDateDayYear = ()=> {
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const today = new Date(); // Sat Apr 11 2020 14:43:05 GMT+0200 (Central European Summer Time)
    return today.toLocaleDateString("en-US",options);
}


exports.currentDayStr = ()=> {

    const today = new Date();
    const options = {
        weekday: "long"
    }
    return today.toLocaleDateString("en-us",options);
    
}




console.log(module.exports);