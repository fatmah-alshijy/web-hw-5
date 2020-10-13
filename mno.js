let addToDo = Document.getElementById('addToDo');
let toDocontainer =Document.getElementByIdById(' toDocontainer');
let inputField =Document.getElementById('inputField');

addToDOBUTTON.addEventListener('click', function  () {
    var paragraph = Document.creatflement('p');
   paragraph.classlist.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDocontainer.appendChild(paragraph);
   inputField.value ="";
   paragraph.addEventListener('dblclick',function () {
    toDocontainer.removeChild(paragraph);
   })
})