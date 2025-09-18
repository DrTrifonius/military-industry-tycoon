import { SaveData } from "/classes/Save.js";

const keys = {
	save: "save",
};

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
