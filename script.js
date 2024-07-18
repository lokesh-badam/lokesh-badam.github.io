let itemForm = document.getElementById('item-form');
let itemInput = document.getElementById('item-input');
let itemList = document.getElementById('item-list');
let clrBtn = document.getElementById('clear');
let filter = document.getElementById('filter');

function addItemsFromStorage(e) {
    let storageItems;
    if(localStorage.getItem('items') === null){
        storageItems = [];
    }
    else{
        storageItems = JSON.parse(localStorage.getItem('items'));
    }

    storageItems.forEach((item)=>{
        addToDOM(item);
    })
    cleanUI();
}

function addItemSubmit(e){
    e.preventDefault();
    
    inp = itemInput.value;
    
    if(inp === ''){
        alert('Please enter a item name');
        return;
    }
    
    addToDOM(inp);
    addToStorage(inp);
    itemInput.value = '';
    cleanUI();
}

function addToDOM(inp) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(inp));
    li.appendChild(createButton("remove-item btn-link text-red"));
    itemList.appendChild(li);
    
}

function addToStorage(inp) {
    let storageItems;
    if(localStorage.getItem('items') === null){
        storageItems = [];
    }
    else{
        storageItems = JSON.parse(localStorage.getItem('items'));
    }
    
    storageItems.push(inp);   
    localStorage.setItem('items',JSON.stringify(storageItems));
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
    // console.log(e.target);
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
        removeFromStorage(e);
    }
    cleanUI();
}

function removeFromStorage(e) {
    let itemName = e.target.parentElement.parentElement.textContent;
    let storageItems;
    if(localStorage.getItem('items') === null){
        storageItems = [];
    }
    else{
        storageItems = JSON.parse(localStorage.getItem('items'));
    }
    storageItems = storageItems.filter((i)=> i !== itemName);
    localStorage.setItem('items',JSON.stringify(storageItems));
    
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

function filterItems(e){
    const text = e.target.value.toLowerCase();
    let items = itemList.querySelectorAll('li');
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1){
            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    })


}

itemForm.addEventListener('submit',addItemSubmit);
itemList.addEventListener('click',removeItem);
clrBtn.addEventListener('click',clearItems);
filter.addEventListener('input',filterItems);
document.addEventListener('DOMContentLoaded',addItemsFromStorage);

cleanUI();