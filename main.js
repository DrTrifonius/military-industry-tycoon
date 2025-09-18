import "/js/dev.js";
import start_pos from "./js/start_pos.js";
import * as templater from "./js/templater.js";
import { initSave } from "./js/persistence.js";
initSave();
log("loading main.js");

window.research = function (topic) {
	log(`research ${topic}`);
};

log(start_pos);

start_pos.guns.forEach((gun) => {
	const gunCard = templater.createCard(gun.name, gun.description);
	document.querySelector("#gunList").appendChild(gunCard);
});
window.ersatzStore = function (param, val) {
	localStorage.setItem(param, val);
};

window.ersatzRead = function (param) {
	return localStorage.getItem(param);
};
