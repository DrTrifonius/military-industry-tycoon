import { getComponent } from "/structural/Component.js";



export async function initGunList(compRoot = undefined){
	const list = await getComponent("/guns/list/gunList.html")
	
	if (compRoot) {
		compRoot.appendChild(list);
	}
	return list;
}