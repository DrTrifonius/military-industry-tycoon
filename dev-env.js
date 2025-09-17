const prod = false;
//setDevEnv()


function setDevEnv() {
	document.querySelector("head").insertAdjacentHTML("beforeend", '\
		<link type="text/css" rel="stylesheet" href="./dev.css" />');
	sessionStorage.setItem("dev", true)
}
window.setDevEnv = setDevEnv
const log = (str) => {
	if (!prod && sessionStorage.getItem("dev")) {
		console.log(str)
	}
}
window.log = log
