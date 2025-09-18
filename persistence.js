import { SaveData } from "./classes/Save.js";

export function initSave(){
    localStorage.setItem("save", new SaveData())
}

