const items = document.querySelectorAll('.menu__item');

for (item of items) {
    item.addEventListener('click', e =>  {
        console.log('click')
    });
}