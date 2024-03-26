var textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    if (/^[a-z]$/.test(keyPressed)) {
        event.preventDefault();
        if (document.activeElement === textarea) {
            textarea.value += keyPressed + keyPressed;
        } else {
            textarea.value += keyPressed;
        }
    }
});



