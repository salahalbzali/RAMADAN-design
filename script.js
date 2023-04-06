// header

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick= () => {
    menu.classList.toggle('fa-times');
    navlist.classList.toggle('active');
}
window.onscroll= () => {
    menu.classList.remove('fa-times');
    navlist.classList.remove('active');
};

// header End

// Cursor

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

// cursor End


// Scroll Top

let nav=document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-top");
console.log(scrollBtn);
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}


// Scroll Top End

// TypedJS

var typed  = new Typed(".auto-type", {
    strings: ["Front end", "Coding","Sleeping"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


var typed  = new Typed(".me-btn", {
    strings: ["Front end", "Coding","Sleeping"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


// TypedJS End





//Animation start

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-content',{delay:350, origin:'left'})
sr.reveal('.man',{delay:350, origin:'right'})
sr.reveal('.left',{delay:350, origin:'left'})
sr.reveal('.right',{delay:350, origin:'right'})
sr.reveal('.verticalLinks',{delay:350, origin:'right'})
sr.reveal('.left-skills',{delay:350, origin:'right'})
sr.reveal('.right-skills',{delay:350, origin:'left'})

sr.reveal('.testimonial,.box-container,.row, .container-box',{delay:200, origin:'bottom'})

                //Animation start End


