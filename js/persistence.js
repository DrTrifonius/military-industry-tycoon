import { SaveData } from "../classes/Save.js";

export function initSave(){

    const newSave = new SaveData()
    localStorage.setItem("save", JSON.stringify(newSave))
    window.saveFile = newSave
}
