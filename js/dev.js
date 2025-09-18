const prod = false;
//setDevEnv()
const bordercss = '\
		<link type="text/css" id="devborders" rel="stylesheet" href="/css/border.css" />'


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

const dev = {
	borders: function(){
		if (document.querySelector('#devborders')){
			document.querySelector('#devborders').remove()
		}else{
			document.querySelector("head").insertAdjacentHTML("beforeend", bordercss);
		}
	}
}
export default dev
window.dev = dev