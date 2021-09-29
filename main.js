const slides = document.querySelectorAll(`.slide`)

const body = document.querySelector(`body`)
body.style.backgroundImage = slides[0].style.backgroundImage

for(const slide of slides){
    slide.addEventListener('click', () =>{
        clearActiveClasses()
        slide.classList.add('active')
        body.style.backgroundImage = slide.style.backgroundImage
    })
}
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
