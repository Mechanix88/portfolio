
// для проверки, что файл подключается
console.log('this is scroll module');

// функция, которая плавно скроллит до указанного в параметре селектора (sel)
function scrollToSel(sel) {
    document.querySelector(sel).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// "слушаем" клик по иконке скролла (внизу секции hero)
document.querySelector('.scroll-arrow').addEventListener('click', () => {
    scrollToSel('.about-me')
})


// "слушаем" клик по пункту меню
let anchors = ['main', 'about-me', 'skills', 'my-works', 'reviews', 'contacts']
for (let anchor of anchors) {
    for (let sel of document.querySelectorAll("a[href='#"+anchor+"']")) {
        sel.addEventListener('click', (e) => {
            e.preventDefault()
            scrollToSel('.'+anchor)
        })
    }
}



