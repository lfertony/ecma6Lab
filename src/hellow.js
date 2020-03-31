let defaultLine = "Start your Journey now!";
let BR = "<br />";
const print = (...args) => console.log(args[0] + ": " + args[1]);

var options ={
    _intro: "You can type",
    _options: ["left", "right", "up", "down", "help"],
    outputOptions() {
        this._options.forEach(f =>
            addToOutput(this._intro + " " + f));
    }
}

function main(){
    let enterEl = document.querySelector("#enter");

    enterEl.addEventListener("click", onClickEnter, false);

    addToOutput();
}

function addToOutput(newline = defaultLine){
    let output = document.querySelector("#output");

    output.innerHTML = output.innerHTML + BR + newline;
}

function onClickEnter(){
    let commands = document.querySelector("#commands");

    if(commands.value == "help"){
        options.outputOptions();
    } else {
        addToOutput(commands.value);
    }

}
main();
print("log", "Jello");
