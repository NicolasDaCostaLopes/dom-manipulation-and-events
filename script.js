// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.style.color = "red";
red.textContent = "Hey I'm red !";

container.appendChild(red);

const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3";
container.appendChild(blue);


const pinkDiv = document.createElement("div");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "2px solid black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
pinkDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO !";
pinkDiv.appendChild(p);

container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (a) => {
    a.target.style.background = "blue";
    alert("Hello World");
});