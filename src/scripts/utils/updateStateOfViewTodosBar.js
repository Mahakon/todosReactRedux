const updateStateOfViewTodosBar = (num) => {
    let todosBar = document.querySelector(".todos-actions-bar");

    if (num === 0) {
        todosBar.style.display = "none";
    } else {
        todosBar.style.display = "flex";
    }
}

module.exports = updateStateOfViewTodosBar;