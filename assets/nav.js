
// menu open on click
document.querySelector('.menu-button').onclick=e=>{
    e.preventDefault();
    openMenu();
}
const openMenu = () => {
    document.querySelector('.backdrop').classList.add("active");
    document.querySelector('aside').classList.add("active");
    
}

// menu collapse on click
document.querySelector('aside button.close').onclick=e=>{
    closeMenu();
}
const closeMenu = () => {
    document.querySelector('.backdrop').classList.remove("active");
    document.querySelector('aside').classList.remove("active");
}


