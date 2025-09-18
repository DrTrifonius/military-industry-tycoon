import { getComponent } from "/structural/Component.js";



/**
 *
 * @param {element} compRoot
 * @returns {element}
 */
export async function getOverview(compRoot) {
	const overview = await getComponent("/overview/overview.html");
	compRoot.replaceWith(overview);
	overview.querySelectorAll(".research").forEach((element) => {
		element.addEventListener("click", function(e){
			log(`research ${e.currentTarget.dataset["research-type"]}`);
		});
	});
	return overview;
}
