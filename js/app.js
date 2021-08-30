// section who we are slider

const backBtns = document.querySelectorAll('.slide .float-back-main');

const slides = document.querySelectorAll('#who-are .slide')

const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const slide4 = document.querySelector('.slide4');
const slide5 = document.querySelector('.slide5');

const slideBtns = document.querySelectorAll('.slide .wrapper .slideBtn')

// backMainBtn

backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        checkSlide(slides, 'translateX(0)')
    })
})

// buttons on the first slide
slideBtns[0].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-100%)');
})
slideBtns[1].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-200%)');
})
slideBtns[2].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-300%)');
})
slideBtns[3].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-400%)');
})

//buttons on the second slide
slideBtns[4].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-100%)');
})
slideBtns[5].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-200%)');
})
slideBtns[6].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-300%)');
})
slideBtns[7].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-400%)');
})

//buttons on the third slide
slideBtns[8].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-100%)');
})
slideBtns[9].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-200%)');
})
slideBtns[10].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-300%)');
})
slideBtns[11].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-400%)');
})

//buttons on the fourth slide
slideBtns[12].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-100%)');
})
slideBtns[13].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-200%)');
})
slideBtns[14].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-300%)');
})
slideBtns[15].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-400%)');
})

//buttons on the fifth slide
slideBtns[16].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-100%)');
})
slideBtns[17].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-200%)');
})
slideBtns[18].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-300%)');
})
slideBtns[19].addEventListener('click', () => {
    checkSlide(slides, 'translateX(-400%)');
})


function checkSlide(slideBox, amount){
    slideBox.forEach(slide => {
        slide.style.transform = amount;
    });
}