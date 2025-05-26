document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if(window.scrollY > 0){ 
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});

document.addEventListener('scroll', () => {
    const toTop = document.querySelector('.back-to-top');
    if(window.scrollY > 500){
        toTop.classList.add('scrolled');
    }else{
        toTop.classList.remove('scrolled');
    }
});

const dropDownMenu = document.querySelector(".dropDownMenu");
function MenuToggle(){
    dropDownMenu.classList.toggle("dropDownMenuHide");
}
