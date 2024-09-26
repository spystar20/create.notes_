const noteBox = document.querySelector(".parent");
const btn = document.querySelector(".btn");
let page = document.querySelectorAll(".input");

function showNotes(){
noteBox.innerHTML= localStorage.getItem('notes')
}
showNotes()

function update(){
    localStorage.setItem("notes" , noteBox.innerHTML)
}

btn.addEventListener("click", () => {
  let div= document.createElement("div");
  let inputBox = document.createElement("p");
  let divBox = document.createElement("div");
  let img = document.createElement("img");
  img.className= "img"
  div.className = "bound";
  inputBox.className = "input";
  inputBox.setAttribute("contenteditable", "true");
  divBox.className = "box";
  img.src = "bin_484611-removebg-preview.png";

  noteBox.appendChild(div).appendChild(inputBox).appendChild(divBox)
  div.appendChild(img);

});

noteBox.addEventListener("click", function (e) {
  if (e.target.tagName ==="IMG") {
    
    e.target.parentElement.remove();
    update()
  }
  else if(e.target.tagName==="P"){
    notes = document.querySelectorAll(".input")
    notes.forEach(notes => {
        notes.onkeyup = function () {
            update()
        }
        
    });
  }
});
