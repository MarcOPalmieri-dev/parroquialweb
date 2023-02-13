
AOS.init();




const menu_button = document.getElementsByClassName("menu")[0];
const off_canvas_menu = document.querySelector("#menu");


menu_button.addEventListener('click',()=>{
    if(off_canvas_menu.classList.contains("menu__out")){

        off_canvas_menu.classList.add("menu__animation")

    }else if(!off_canvas_menu.classList.contains("menu")){

        off_canvas_menu.classList.add("menu__out")
    }
})

off_canvas_menu.addEventListener('animationend',()=>{
    off_canvas_menu.classList.remove("menu__out")
    off_canvas_menu.classList.remove("menu__animation")
})


// Read more function

const [...readmore_button] = document.getElementsByClassName('more');
const [...hidden_p] = document.getElementsByClassName('hidden');

readmore_button.forEach(button=>{
    
    button.addEventListener('click',(e)=>{
   
        const p_element = Array.from(e.target.parentNode.children).find(element => element.className == "hidden");
        p_element.classList.remove("hidden");
        button.style.display="none";
    })
})




// footer buttons

const [...footer_more_button] = document.getElementsByClassName("footer-card__container");

const [...footer_content] = document.getElementsByClassName("footer-content__container");

if (!window.matchMedia("(min-width: 769px)").matches) {

    footer_more_button.forEach(button=>{
        
        button.addEventListener('click',()=>{

            if(button.children[1].classList.contains("hidden")){
                button.children[1].classList.remove("hidden");
    
            }else if(!button.children[1].classList.contains("hidden")){
                button.children[1].classList.add("hidden")
            }
        })
    })

}else{
    footer_content.forEach(button =>{
        button.classList.remove("hidden");
    })
}

// Scripts to execute sliders 

if(window.location.href.includes('main')) {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

}

if(window.location.href.includes('main') || window.location.href.includes('index.html') ) {

    emailjs.init('user_NDTpGQZNkCkZ0WMxj4kKM')
      
    const btn = document.getElementById('button');
    const inputs = document.querySelectorAll('.inputs');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.style.transform = 'scale(1.1)'

    //Service de Parroquial
    const serviceID = 'service_2uasrtd'
    const templateID = 'template_hlphcv8';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        
        alert('Tu mensaje ha sido enviado!');
        btn.style.transform="";
        inputs.forEach(input=>{
            input.value="";
        })
        }, (err) => {

        alert('Ha ocurrido un error. Por favor, intentalo más tarde, o intenta enviar tu mensaje directamente a la respectiva dirección de mail que aparece en la lista anterior.');
        btn.style.transform="";
        });
    });
}


// Modal scripts
if(window.location.href.includes('noticias.html')){

    const notice_container = document.querySelector('.notice__container');
    const modal = document.querySelector('.modal__container');
    const modal_img = document.querySelector('.modal-img');
    
        notice_container.addEventListener('click', event=>{
            if(event.target.nodeName == 'IMG'){
                modal.classList.remove('invisible');
                modal_img.src = event.target.src;
            }

            
            if(event.target.classList[0] == 'modal__container'){
                modal.classList.add('invisible');
            }
        })
}
