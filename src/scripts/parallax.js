const parallax = document.querySelector('.welcome');
const layers = parallax.children;
console.log (layers)

function moveLayersDependsOnScroll(wScroll){

    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider /20;

        layer.style.transform = `translateY(${strafe}%)`

    })

}

window.addEventListener('scroll' , e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
})