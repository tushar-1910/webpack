import logo from "./logo"
import addnote from "./note"
import ("./index.css")


let logoimg = logo();

let inputbox = document.createElement('div');
inputbox.setAttribute('id','inputbox');

let inputNote = document.createElement('input');
inputNote.type = 'text';
inputNote.placeholder = 'Enter Note';
inputNote.setAttribute('id','inputNote');

let add = document.createElement('button');
add.innerText = "Add Note";
add.setAttribute('class','addbtn');
// add.addEventListener('click',addnote);
add.onclick = addnote;

inputbox.append(inputNote,add);
document.getElementById('root').append(logoimg,inputbox);
