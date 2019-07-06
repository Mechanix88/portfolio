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

// function parallaxx(e){
//     Array.from(layers).forEach(layer => {
//         let speed = layer.getAttribute('data-speed');
//         layer.style.transform = `translateX(${event.clientX*speed/20}px)`
//     })
// }

// window.addEventListener('mousemove' , parallaxx);

