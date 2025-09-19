import { keys } from "/src/js/keys.js";
import { SaveData } from "/src/classes/Save.js";

export function initSave() {
	const oldSave = localStorage.getItem(keys.save);
	if (oldSave) {
		window.saveFile = JSON.parse(oldSave);
	} else {
		const newSave = new SaveData();
		localStorage.setItem("save", JSON.stringify(newSave));
		window.saveFile = newSave;
	}
}
