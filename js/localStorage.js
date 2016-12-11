/* Store camera password locally */
var window;
var document;

/* Save all required settings */
function savePw() {
    var inpStrPw = document.getElementById("wifiPassword");
    window.localStorage.setItem("wifiPassword", inpStrPw.value);
}

/* Get locally stored password */
function getStrPw() {
    var getStrPw = window.localStorage.getItem("wifiPassword");
    document.getElementById("wifiPassword").value = getStrPw;
}
