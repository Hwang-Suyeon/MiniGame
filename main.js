// Parse JSON
function loadItems() {
    return fetch('items/items.json')
        .then(response => response.json())
        .then(json => json.items);
}

function createArticle(item) {
    return `
    <article class="item ${item.kind} ${item.color}">
        <img src="${item.image}" alt="">
        <span>${item.gender}, ${item.size} size</span>
    </article>
    `;
}

function addItems(items) {
    const $container = document.querySelector('.container');
    $container.innerHTML = items.map(item => createArticle(item)).join('');
}

// Filter Items 
function filterSelection(c) {
    const $item = document.getElementsByClassName('item');
    for (let i = 0; i < $item.length; i++) {
        w3RemoveClass($item[i], 'show');
        if ($item[i].className.indexOf(c) > -1) w3AddClass($item[i], 'show');
    }
}

function w3AddClass(element, name) {
    var arr = element.className.split(' ');
    if (arr.indexOf(name) == -1) {
        element.className += ' ' + name;
    }
}

function w3RemoveClass(element, name) {
    var arr = element.className.split(' ');
    var index = arr.indexOf(name)
    if (index > -1) {
        arr.splice(index, 1);
    }
    element.className = arr.join(' ');
}

// main
loadItems()
    .then(items => {
        console.log(items);
        addItems(items);
        filterSelection('item');
    })
