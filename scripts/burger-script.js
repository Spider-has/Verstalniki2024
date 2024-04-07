
const burgerButtonId = "hamburger-button"
const burgerListId = "hamburger-list"
const burgerMenuId = "hamburger"


window.onload = () => {
    console.log(1)
    let burgerMenu = document.getElementById(burgerMenuId);
    let burgerButton = document.getElementById(burgerButtonId);
    let burgerList = document.getElementById(burgerListId);
    let burgerWrapper = document.getElementById("burger-wrapper");
    let bLine1 = document.getElementById("line1")
    let bLine2 = document.getElementById("line2")
    let bLine3 = document.getElementById("line3")
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
            if(bLine1){
                bLine1.classList.add("line1_rotate")
            }
            if(bLine2){
                bLine2.classList.add("line2_rotate")
            }
            if(bLine3){
                bLine3.classList.add("line3_rotate")
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
            if(bLine1){
                bLine1.classList.remove("line1_rotate")
            }
            if(bLine2){
                bLine2.classList.remove("line2_rotate")
            }
            if(bLine3){
                bLine3.classList.remove("line3_rotate")
            }
        }

    })
}