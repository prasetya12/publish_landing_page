window.addEventListener('scroll', function () {
    let headerElm = document.querySelector('.header')
    if (window.scrollY > 0) {
        headerElm.style = "background-color:white;box-shadow : 0 -6px 10px 5px rgba(0,0,0,0.5);z-index:1000"
    } else {
        headerElm.style = "background-color:transparent;box-shadow:0"
    }

})

const navItems = document.querySelectorAll('.nav_menu_list_item')

navItems.forEach((menu) => {
    menu.addEventListener("click", () => {
        navItems.forEach((menu) => {
            menu.classList.remove('active')
        })
        menu.classList.toggle('active')
    })
})
console.log(navItems, 'halo')