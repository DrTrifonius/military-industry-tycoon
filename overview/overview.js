import { getComponent } from "/structural/Component.js";

/**
 *
 * @param {element} compRoot
 * @returns {element}
 */
export async function initOverview(compRoot = undefined) {
	const overview = await getComponent("/overview/overview.html");
	overview.querySelectorAll(".research").forEach((element) => {
		element.addEventListener("click", function (e) {
			log(`research ${e.currentTarget.dataset.research_type}`);
		});
	});
	if (compRoot) {
		compRoot.appendChild(overview);
	}
	return overview;
}
