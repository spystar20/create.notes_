
const parentDiv = document.querySelector(".parent");
const btn = document.querySelector(".button");

function check() {
  parentDiv.innerHTML = localStorage.getItem("notes");
}
check()
function save() {
  localStorage.setItem("notes", parentDiv.innerHTML);
}

btn.addEventListener("click", () => {
  const parentDiv = document.querySelector(".parent");
  const divBox = document.createElement("div");
  divBox.className = "bound";
  const input = document.createElement("para");
  input.className = "input";
  input.setAttribute("contenteditable", "true");
  const div = document.createElement("div");
  div.className = "box";
  div.setAttribute("contenteditable", "true");
  const img = document.createElement("img");
  img.src = "bin_484611-removebg-preview.png";
  img.className = "img";
  parentDiv.appendChild(divBox);
  divBox.appendChild(input).appendChild(div);
  divBox.appendChild(img);

  divBox.querySelector(".img").addEventListener("click", () => {
    divBox.remove();
    save();
  });

  divBox.addEventListener("keyup", () => {
    let notes = document.querySelectorAll(".box");
    notes.forEach((notes) => {
      save();
    });
  });
});
