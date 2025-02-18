import { images } from './images.js'

const motoScroll = document.querySelector('.moto-scroll')
const MAX_FRAMES = 151
let currentFrame = 0

function updateImage(frame = 0) {
    const src = images[frame].p
    img.src = src
}

// init with the first image
const img = motoScroll.querySelector('img')
updateImage(currentFrame)

// Altura máxima del scroll
let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('resize', () => {
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;
});

let lastFrameUpdate = 0

window.addEventListener('scroll', () => {
    if (Date.now() - lastFrameUpdate < 1) return true
    // Actualizamos el contador
    lastFrameUpdate = Date.now()
    // Posición actual del scroll
    const scrollPosition = window.scrollY
    // Calcular el porcentaje del scroll
    const scrollFraction = scrollPosition / maxScroll;
    // ¿Qué frame le toca?
    const frame = Math.floor(scrollFraction * MAX_FRAMES)
    // nos evitemos algo de trabajo cuando
    // al hacer scroll, el frame que le toca es el mismo
    // que ya tenía
    if (currentFrame !== frame) {
        // creamos el id del nombre del archivo
        updateImage(frame)
        currentFrame = frame
    }
});