const docElemById = (id) => document.getElementById(id);

let allArticles1 = document.body.childNodes[3].children[1].childNodes[1].children[0].id
console.log(`1) ${allArticles1}`);
let allArticles2 = docElemById('allArticles').id
console.log(`2) ${allArticles2}`);
let allArticles3 = docElemById('allArticles')
console.log(allArticles3)

let allContacts1 = document.body.childNodes[3].children[1].childNodes[1].children[1].id
console.log(`1) ${allContacts1}`);
let allContacts2 = docElemById('contacts').id
console.log(`2) ${allContacts2}`);
let allContacts3 = docElemById('contacts')
console.log(allContacts3) 