import { getComponent } from "/src/structural/Component.js";



export async function initGunList(compRoot = undefined){
	const list = await getComponent("/src/guns/list/gunList.html")
	
	if (compRoot) {
		compRoot.appendChild(list);
	}
	return list;
}