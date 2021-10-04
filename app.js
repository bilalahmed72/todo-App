

var ulCont = document.getElementById("container-ul"); 

function taskAdded(){

    // INPUT GETTING
    var input = document.getElementById("input");
    var list = document.createElement("li");
    var writeEle = document.createTextNode(input.value);
    list.append(writeEle);

    // EDIT BUTTON DECLARING
    var editBtn = document.createElement("button");
    var editTextNode = document.createTextNode("Edit");
    editBtn.append(editTextNode);
    list.append(editBtn)
    editBtn.setAttribute("class", 'editBtnClass');
    editBtn.setAttribute('onclick', 'editItem(this)');

    // DELETE BUTTON DECLARING
    var delBtn = document.createElement("button");
    var delTextNode = document.createTextNode("Delete");
    delBtn.append(delTextNode);
    list.appendChild(delBtn);
    delBtn.setAttribute("class", 'delBtnClass');
    delBtn.setAttribute("onclick", 'delItem(this)');
    console.log(list)

    // OUTPUTING INPUT AND BUTTON
    var container = document.getElementById("container-ul");
    container.append(list);
    input.value = "";
    // console.log(input.value)
}

function editItem(e){
    var sameVal = e.parentNode.firstChild.nodeValue
    var editted = prompt("Enter new value: ", sameVal)
    e.parentNode.firstChild.nodeValue = editted;    
    // console.log(e.parentNode.firstChild.nodeValue)
}

function delItem(myDelBtn){
    myDelBtn.parentNode.remove();
}

function delAll(){
    ulCont.innerHTML = "";
}

