/**
 * 切换document元素的可见性。
 * @param {*} element 
 * @param {*} enabled 
 */
function toggleElement(element, enabled) {
    //    let button_back = document.querySelector(".button_back");
    if (enabled) {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}

export { toggleElement };