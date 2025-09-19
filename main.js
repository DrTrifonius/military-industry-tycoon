import "./src/js/dev.js";
import start_pos from "./src/js/start_pos.js";
import * as templater from "./src/js/templater.js";
import { initSave } from "./src/js/persistence.js";
import { initOverview } from "./src/overview/overview.js";
import { initGunList } from "./src/guns/list/gunList.js";
import { translatePage } from "./src/lang/translator.js";
initSave();
log("loading main.js");

log(start_pos);

await initOverview(document.querySelector("#general_pane"));
await initGunList(document.querySelector("#detail_pane"));
start_pos.guns.forEach((gun) => {
	const gunCard = templater.createCard(gun.name, gun.description);
	document.querySelector("#gun_list")?.appendChild(gunCard);
});

await translatePage("en");

document.querySelector("#loading_screen").setAttribute("hidden", "hidden");
document.querySelector("#content").removeAttribute("style");
