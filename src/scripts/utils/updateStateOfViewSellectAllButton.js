function updateStateOfViewSellectAllButton(num) {
    let todosButton = document.querySelector(".todos-add_select-all");

    if (num === 0) {
        todosButton.style.visibility = "hidden";
    } else {
        todosButton.style.visibility = "visible";
    }
}

module.exports = updateStateOfViewSellectAllButton;