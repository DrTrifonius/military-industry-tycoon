import "/js/dev.js";
import start_pos from "./js/start_pos.js";
import * as templater from "./js/templater.js";
import { initSave } from "./js/persistence.js";
import { initOverview } from "./overview/overview.js";
import { initGunList } from "./guns/list/gunList.js";
initSave();
log("loading main.js");

window.research = function (topic) {
	log(`research ${topic}`);
};

log(start_pos);


await initOverview(document.querySelector("#left_pane"))
await initGunList(document.querySelector("#right_pane"))
start_pos.guns.forEach((gun) => {
	const gunCard = templater.createCard(gun.name, gun.description);
	document.querySelector("#gun_list").appendChild(gunCard);
});