const templates = document.createElement('html');
await fetch('./html/templates.html').then((response) => response.text()).then(text => templates.innerHTML = text)

export function createCard(header, body) {
	const template = templates.querySelector('body>.card');
	const result = template.cloneNode(true);
	if(header){
		result.querySelector(".card-header").innerHTML = header;
	}else{
		result.querySelector(".card-header").remove()
	}

	result.querySelector(".card-body").innerHTML = body;
	return result;
}