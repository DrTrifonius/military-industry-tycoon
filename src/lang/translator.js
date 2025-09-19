export async function translatePage(lang) {
	const language = await (await fetch(`/src/lang/${lang}.json`)).json();

	for (const key in language) {
		if (!Object.hasOwn(language, key)) continue;

		document.querySelectorAll(`.txt_${key}`).forEach(function(element){
			element.textContent = language[key];
		})
		
	}
}
