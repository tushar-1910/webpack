let notes=[];
let box = document.createElement('div');
box.setAttribute('id','box');
function addnote()
{

    let note = document.getElementById('inputNote').value;
    notes.push(note);

    box.innerHTML = "";

    notes.forEach(ele => {
        let note = document.createElement('h3');
        note.setAttribute('class','note');
        note.innerText = ele;

        box.append(note);
    });

    document.getElementById('root').append(box);

}

export default addnote;