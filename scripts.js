
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

// readMoreFunction = (e)=>{
//     if(e.target.dataset.number == "1"){
//         const p_element = e.path[0].previousElementSibling
//         if(p_element.classList.contains("hidden")){
//             p_element.classList.remove("hidden")
//             console.log(this)
//         }
//     }
// }
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

// button.addEventListener('click',(e)=>{
//     if(e.target.dataset.number == "1"){
//         const p_element = e.path[0].previousElementSibling;
        
//         if(p_element.classList.contains("hidden")){
//             p_element.classList.remove("hidden");
//             button.innerText="Leer menos...";

//         }else if(!p_element.classList.contains("hidden")){
//             p_element.classList.add("hidden")
//             button.innerText="Leer más..."
//         }
//     })