// class Plugin {
//     constructor() {}

//     processCandle(params) {
//         console.log("------------------->>>>>> <<<<------------------------")
//     }
// }

function Plugin() {}

Plugin.prototype.processCandle = function(event) {
    console.log("------------------->>>>>><<<<------------------------")
}

module.exports = Plugin;