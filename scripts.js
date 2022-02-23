
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

