
const List = document.querySelectorAll('.item');
console.log(`Number of categories: ${List.length}`)

List.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
});
