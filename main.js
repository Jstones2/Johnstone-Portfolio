
//// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle ('window-scroll', window.scrollY > 0)
})



//// show/hide faq answers//
const faqs = document.querySelectorAll ('.faq');

faqs.forEach(faq => {
    faq.addEventListener('Click', () => {
        faq.classList.toggle('faq.open');

        //change icon

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        }
        else{
            icon.className = "uil uil-plus";
        }
    })
})



///SHOW/ HIDE NAV BAR IN SMALL SCREEN


const menu = document.querySelector(".nav_menu");
 const menuBtn = document.querySelector("#open-menu-btn");
 const closeBtn = document.querySelector("#close-menu-btn");

 menuBtn.addEventListener('click', () => {
    menu.style.display= "flex";
    closeBtn.style.display= "inline-block";
    menuBtn.style.display = "none";
 })
 /// Close nav bar function
 const closeNav = () => {
    menu.style.display= "none";
    closeBtn.style.display= "none";
    menuBtn.style.display = "inline-block";
 }

 closeBtn.addEventListener('click', closeNav)
