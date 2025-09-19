

/**
 * 
 * @param {string} templateFile 
 * @returns {Element}
 */
export async function getComponent(templateFile){

		const tempRoot = document.createElement("html");
		await fetch(templateFile)
			.then((response) => response.text())
			.then((text) => (tempRoot.innerHTML = text))
			.then();
		return tempRoot.querySelector("body").firstElementChild
}