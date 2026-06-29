const display = document.getElementById("display");
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    let expression = display.value;
    if (/\/0+(\.0+)?(?!\d)/.test(expression)) {
        display.value = "Cannot divide by 0";
        return;
    }
    try {
        let result = eval(expression);
        if (!isFinite(result)) {
            display.value = "Cannot divide by 0";
        }
        else {
            display.value = result;
        }
    }
    catch {
        display.value = "Error";
    }
}
