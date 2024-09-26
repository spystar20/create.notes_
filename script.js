const noteBox = document.querySelector(".parent");
const btn = document.querySelector(".btn");

function showNotes() {
  noteBox.innerHTML = localStorage.getItem("notes") || "";
  reinitializeEvents();
}
showNotes();
function updateNotes() {
  localStorage.setItem("notes", noteBox.innerHTML);
}

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "bound";

  const inputBox = document.createElement("p");
  inputBox.className = "input";
  inputBox.setAttribute("contenteditable", "true");

  const divBox = document.createElement("div");
  divBox.className = "box";
  divBox.setAttribute("contenteditable", "true");

  const img = document.createElement("img");
  img.className = "img";
  img.src = "bin_484611-removebg-preview.png";
  
noteBox.appendChild(div).appendChild(inputBox).appendChild(divBox);
  div.appendChild(img);

  updateNotes();
  reinitializeEvents();
});

noteBox.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateNotes();
  }
});

function reinitializeEvents() {
  noteBox.querySelectorAll(".box").forEach(note => {
    note.onkeyup = updateNotes();
  });
}

