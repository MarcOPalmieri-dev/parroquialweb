
// AOS.init();


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

readmore_button.forEach(button=>{
    
    button.addEventListener('click',(e)=>{
        const p_element = e.path[0].previousElementSibling;
        
        if(p_element.classList.contains("hidden")){
            p_element.classList.remove("hidden");
            button.innerText="Leer menos...";

        }else if(!p_element.classList.contains("hidden")){
            p_element.classList.add("hidden")
            button.innerText="Leer más..."
        }
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


  emailjs.init('user_NDTpGQZNkCkZ0WMxj4kKM')

        const btn = document.getElementById('button');
        const inputs = document.querySelectorAll('.inputs');

        document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(document.querySelectorAll('option'))
        btn.style.height="88px";

        //Service de Parroquial
        const serviceID = 'service_2uasrtd'
        const templateID = 'template_hlphcv8';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            
            alert('Tu mensaje ha sido enviado!');

            inputs.forEach(input=>{
                input.value="";
            })
            }, (err) => {
            alert('Ha ocurrido un error. Por favor, intentalo más tarde, o intenta enviar tu mensaje directamente a la respectiva dirección de mail que aparece en la lista anterior.');
            });
        });