console.log("loading main.js");
import start_pos from "./start_pos.js";

import * as card from "/ui/card/card.js"


window.research = function (topic) {
	console.log(`research ${topic}`);
}

console.log(start_pos)

start_pos.guns.forEach(gun => {
	const gunCard = card.create(gun.name, gun.description)
	document.querySelector("body").appendChild(gunCard)
	
});
