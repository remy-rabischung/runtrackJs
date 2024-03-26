var textarea = document.getElementById("keylogger");
var isTextareaFocused = false;

textarea.addEventListener("focus", function() {
    isTextareaFocused = true;
});

textarea.addEventListener("blur", function() {
    isTextareaFocused = false;
});

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    
    if (/^[a-z]$/.test(keyPressed)) {
        event.preventDefault(); 

        if (isTextareaFocused) {
            textarea.value += keyPressed + keyPressed;
        } else {
            textarea.value += keyPressed;
        }
    }
});


