let itemForm = document.getElementById('item-form');
let itemInput = document.getElementById('item-input');
let itemList = document.getElementById('item-list');
let clrBtn = document.getElementById('clear');
let filter = document.getElementById('filter');



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
    itemInput.value = '';
    cleanUI();
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

function removeItem(e){
    console.log(e.target);
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
    cleanUI();
}

function clearItems(e){
    while(itemList.firstChild){
        itemList.firstChild.remove();
    }
    cleanUI();
}

function cleanUI(){
    let items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clrBtn.style.display = 'none';
        filter.style.display = 'none';
    }
    else{
        clrBtn.style.display = 'block';
        filter.style.display = 'block';

    }
}

itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clrBtn.addEventListener('click',clearItems);

cleanUI();