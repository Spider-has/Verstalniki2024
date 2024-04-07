
const burgerButtonId = "hamburger-button"
const burgerListId = "hamburger-list"
const burgerMenuId = "hamburger"

window.onload = () => {
    console.log(1)
    let burgerMenu = document.getElementById(burgerMenuId);
    let burgerButton = document.getElementById(burgerButtonId);
    let burgerList = document.getElementById(burgerListId);
    let burgerWrapper = document.getElementById("burger-wrapper");
    let isListOpened = false
    if(burgerButton)
        burgerButton.addEventListener("click", () => {
            console.log('click')
        if(!isListOpened){
            isListOpened = true
            if(burgerMenu){
                burgerMenu.classList.add("burger-menu_opened")
            }
            if(burgerList){
                burgerList.style.display = "flex"
            }
            if(burgerWrapper)
            {
                burgerWrapper.classList.add("burger-wrapper")
            }
        }
        else{
            isListOpened = false
            if(burgerMenu){
                burgerMenu.classList.remove("burger-menu_opened")
            }
            if(burgerList){
                burgerList.style.display = "none"
            }
            if(burgerWrapper)
            {
                burgerWrapper.classList.add("burger-wrapper")
            }
        }
    })
}