// Demo

// grab list box 1 from dom
let listBox1 = document.querySelector('#listBox1');

// grab unordered list from listBox1
let listBox1_ul = listBox1.firstElementChild;

// array of items
let items = [ 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];


// iterate over items
items.forEach(item => {
    // create a new list item
    let newLi = document.createElement('li');
    // set textContent of new list item to the item in items
    newLi.textContent = item;
    // append the newly constructed list item to listbox 1 UL
    listBox1_ul.append(newLi)
});