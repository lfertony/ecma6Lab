"use strict";

var defaultLine = "Start your Journey now!";
var BR = "<br />";
var print = function print() {
    return console.log((arguments.length <= 0 ? undefined : arguments[0]) + ": " + (arguments.length <= 1 ? undefined : arguments[1]));
};

var options = {
    _intro: "You can type",
    _options: ["left", "right", "up", "down", "help"],
    outputOptions: function outputOptions() {
        var _this = this;

        this._options.forEach(function (f) {
            return addToOutput(_this._intro + " " + f);
        });
    }
};

function main() {
    var enterEl = document.querySelector("#enter");

    enterEl.addEventListener("click", onClickEnter, false);

    addToOutput();
}

function addToOutput() {
    var newline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var output = document.querySelector("#output");

    output.innerHTML = output.innerHTML + BR + newline;
}

function onClickEnter() {
    var commands = document.querySelector("#commands");

    if (commands.value == "help") {
        options.outputOptions();
    } else {
        addToOutput(commands.value);
    }
}
main();
print("log", "Jello");
//# sourceMappingURL=hellow.js.map