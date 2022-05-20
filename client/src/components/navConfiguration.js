export function navDetector(actualRoute, drop){
    const actual = document.getElementById(actualRoute)

    const itemsActive = document.getElementsByClassName("active")
    for(var i=0;i<itemsActive.length;i++){
        const item = itemsActive[i]
        item.classList.remove("active")
    }
    if(drop){
        const droper = document.getElementById("navbarDropdown")
        droper.classList.add("active")
    }
    
    actual.classList.add("active")
}