sessionStorage.setItem("dev", "")

if (window.isDevEnv) {
	setDevEnv()
}
function setDevEnv(){

	console.log("loading main.js");
	document.querySelector("head").insertAdjacentHTML("beforeend", '\
		<link type="text/css" rel="stylesheet" href="./dev.css" />');
	sessionStorage.setItem("dev", true)
}
window.setDevEnv = setDevEnv
const log = (str) => {
    if (sessionStorage.getItem("dev")) {
        console.log(str)
    }
}
window.log = log