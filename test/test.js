console.log("hello world")


const templates = document.createElement('html');
await fetch('./subtest.html').then((response) => response.text()).then(text => templates.innerHTML = text)

console.log(templates.querySelector("body"))


templates.querySelector("body").click()