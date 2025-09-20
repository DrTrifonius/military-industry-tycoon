const prod = true;
//setDevEnv()
const bordercss = '\
		<link type="text/css" id="devborders" rel="stylesheet" href="/css/border.css" />'

const log = (str) => {
	if (!prod ) {
		console.log(str)
	}
}
window.log = log

class Dev{
	get borders(){
		if (document.querySelector('#devborders')){
			document.querySelector('#devborders').remove()
		}else{
			document.querySelector("head").insertAdjacentHTML("beforeend", bordercss);
		}
	}
}


const dev = new Dev()
export default dev
window.dev = dev