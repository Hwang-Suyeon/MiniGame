// main
loadItems().then(items => {
    // console.log(items);
   addItems(items);
   filterSelection('item');
});

// Parse JSON
// item 가져오기
function loadItems() {
    return fetch('items/items.json')
        .then(response => response.json())
        .then(json => json.items);
}

// 화면에 item 추가하기
function addItems(items) {
    const $container = document.querySelector('#container');
    $container.innerHTML = items.map(item => createArticle(item)).join('');
}

// item 생성하기
function createArticle(item) {
    return `
    <article class="item ${item.kind} ${item.color}">
        <img src="${item.image}" alt="">
        <span>${item.gender}, ${item.size} size</span>
    </article>
    `;
}

// Filter Items 
function filterSelection(c) {
    const $items = document.getElementsByClassName('item');
    for (let i = 0; i < $items.length; i++) {
        removeClass($items[i], 'show');
        if ($items[i].className.indexOf(c) > -1) addClass($items[i], 'show');
    }
}

function removeClass(element, name) {
    var arr = element.className.split(' ');
    var index = arr.indexOf(name)
    if (index > -1) {
        arr.splice(index, 1);
    }
    element.className = arr.join(' ');
}

function addClass(element, name) {
    var arr = element.className.split(' ');
    if (arr.indexOf(name) == -1) {
        element.className += ' ' + name;
    }
}