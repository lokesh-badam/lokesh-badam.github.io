let itemForm = document.getElementById('item-form');
let itemInput = document.getElementById('item-input');
let itemList = document.getElementById('item-list');


function addItem(e){
    e.preventDefault();
    
    inp = itemInput.value;
    
    if(inp === ''){
        alert('Please enter a item name');
        return;
    }
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(inp));
    li.appendChild(createButton("remove-item btn-link text-red"));
    
    itemList.appendChild(li);
}

function createButton(classes) {
    let but = document.createElement('button');
    but.className = classes;
    but.appendChild(createIcon("fa-solid fa-xmark"));
    return but;
}

function createIcon(classes) {
    let icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

itemForm.addEventListener('submit',addItem);