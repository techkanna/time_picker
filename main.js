// parent
const parent = document.querySelector('.col-1');
const parentHeight = +parent.clientHeight;

// child
const child = parent.children[0];
const childHeight = +parent.children[0].clientHeight;
console.dir(parent);
console.dir(child);
console.log(parentHeight);
console.log(childHeight);
