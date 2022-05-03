let screenDisplay = document.querySelector("#output");
let operation = document.querySelectorAll(".operation");
let nums = document.querySelectorAll(".nums");

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function(e) {
        screenDisplay.innerHTML += e.target.innerHTML;
    });
}

for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click", function(e) {
        var currentStr = screenDisplay.innerHTML;
        var lastChar = currentStr[currentStr.length - 1];

        if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            var newStr = currentStr.substring(0, currentStr.length - 1) + e.target.innerHTML;
            screenDisplay.innerHTML = newStr;
        } else if (currentStr.length == 0) {
            alert("enter a number first");
        } else {
            screenDisplay.innerHTML += e.target.innerHTML;
        }
    });
}

function clearScreen() {
    screenDisplay.innerHTML = "";
}

function deleteOne() {
    screenDisplay.innerHTML = screenDisplay.innerHTML.slice(0, -1);
}

function equalBtn() {
    if(screenDisplay.innerHTML == "") {
        alert("enter a number first");
    } else {
        screenDisplay.innerHTML = eval(screenDisplay.innerHTML);
    }
}
