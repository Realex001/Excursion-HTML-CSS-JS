
// Смена фона в шапке
const header = document.querySelector('.header');
const paginations = document.querySelectorAll('.pg')
let classAdd = "bg-img1"
let k = 2;

setInterval(function(){
    header.classList.remove(classAdd);
    paginations[k-2].classList.remove('pg-active');
    if (k > 3) {
        k = 1;
    }
    classAdd = "bg-img" + String(k);
    header.classList.add(classAdd);
    paginations[k-1].classList.add('pg-active');
    k = k+1;

}, 10000)

// Кнопка скрывающегося меню
const navList = document.querySelector(".nav-list");
const btnMenu = document.querySelector(".btn-menu");
btnMenu.addEventListener('click', ()=> {
    navList.classList.toggle("active");
    btnMenu.classList.toggle("active");
    body.classList.toggle("active");
})


// Форма Перезвонить мне
const navForm = document.querySelector('.nav-form');
const form = document.querySelector('.form');
const formBtnOpen = document.querySelector(".nav-connection-btn")
const formBtnsClose = document.querySelector('.form-close');
const body = document.querySelector('body');
const bgOpenForm = document.querySelector('.bg-open-form');

formBtnOpen.addEventListener('click', ()=>{
    navForm.classList.add('active');
    form.classList.add('active');
    body.classList.add('active');
    bgOpenForm.classList.add('active');

    btnMenu.classList.add('index4');

});

formBtnsClose.addEventListener('click', ()=>{
    navForm.classList.remove('active');
    form.classList.remove('active');
    body.classList.remove('active');
    bgOpenForm.classList.remove('active');
    btnMenu.classList.remove('index4');
});


bgOpenForm.addEventListener('click', ()=> {
    navForm.classList.remove('active');
    form.classList.remove('active');
    body.classList.remove('active');
    bgOpenForm.classList.remove('active');
    btnMenu.classList.remove('index4');
});


// Слайдер с формы
const sliders = document.querySelectorAll('.swiper-container');
sliders.forEach((el) => {
    let swiper = new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
        el: el.querySelector('.swiper-pagination'),
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },

        450: {
            slidesPerView: "auto",
            spaceBetween: 10
          },

        800: {
            slidesPerView: "auto",
            spaceBetween: 20
        },
    },

  });

});




// Форма Подобрать маршрут
const formOrderContent = document.querySelector('.header-content-form');
const formOrder = document.querySelector('.form-order');
const formOrderBtnOpen = document.querySelector(".header-content-btn")
const formOrderBtnClose = document.querySelector('.form-order-close');
const bgOpenFormOrder = document.querySelector('.bg-open-form-order');

const nav = document.querySelector('.nav');

formOrderBtnOpen.addEventListener('click', ()=>{
    
    formOrderContent.classList.add('active');
    formOrder.classList.add('active');
    bgOpenFormOrder.classList.add('active');

    nav.classList.add('index4');
    btnMenu.classList.add('index4');
});


formOrderBtnClose.addEventListener('click', ()=>{
    formOrderContent.classList.remove('active');
    formOrder.classList.remove('active');
    bgOpenFormOrder.classList.remove('active');

    nav.classList.remove('index4');
    btnMenu.classList.remove('index4');
});


bgOpenFormOrder.addEventListener('click', ()=> {
    formOrderContent.classList.remove('active');
    formOrder.classList.remove('active');
    bgOpenFormOrder.classList.remove('active');

    nav.classList.remove('index4');
    btnMenu.classList.remove('index4');
});


// Карточки с информацией по квадроциклам (Форма Подобрать маршрут)
const formInfo = document.querySelectorAll(".form-info");
const infoKvadro = document.querySelectorAll(".info-kvadro");
const infoKvadroClose = document.querySelectorAll(".close-info-kvadro");

for (let i = 0; i < formInfo.length; i++) {
    formInfo[i].addEventListener('click', ()=> {
        infoKvadro[i].classList.add('active');
    });
}

for (let j = 0; j < infoKvadroClose.length; j++) {
    infoKvadroClose[j].addEventListener('click', ()=> {
        infoKvadro[j].classList.remove('active');
    });
    
}






const slider4 = document.querySelector('.swiper-container4');

    let swiper = new Swiper(slider4, {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    allowTouchMove: false,
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
        el: '.swiper-pagination4',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },

        450: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        500: {
            slidesPerView: 3,
            spaceBetween: 10
        },

        750: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        850: {
            slidesPerView: 4,
            spaceBetween: 20
        },

        1000: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 6
        },

        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        1450: {
            spaceBetween: 30
        },

    }

});


const video = document.getElementsByTagName('video')[0];
const playBtn = document.querySelector(".playBtn");

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playBtn.classList.add('active');
    } else {
        video.pause();
        playBtn.classList.remove('active');
    }
}, false);


playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playBtn.classList.add('active');
    } else {
        video.pause();
        playBtn.classList.remove('active');
    }
}, false);




// question-answer

const questionArrow = document.querySelectorAll(".question-arrow");
const questionText = document.querySelectorAll(".actual-question-text");
const actualQuestion = document.querySelectorAll(".actual-question");

for (let i = 0; i < questionArrow.length; i++) {
    questionArrow[i].addEventListener('click', ()=> {
        questionText[i].classList.toggle('active');
        actualQuestion[i].classList.toggle('active');
        questionArrow[i].classList.toggle('active');
    });
    
}
