const templates = document.createElement('html');
await fetch('./templates.html').then((response) => response.text()).then(text => templates.innerHTML = text)

export function create(header, body) {
    const template = templates.querySelector('body>.card');
    const result = template.cloneNode(true);
    if (header) {
        result.querySelector(".card-header").innerHTML = header;
    } else {
        result.querySelector(".card-header").remove()
    }
    if (body) {
        result.querySelector(".card-body").innerHTML = body;
    } else {
        result.querySelector(".card-body").remove();
    }
    return result;
}
export const createCard = create