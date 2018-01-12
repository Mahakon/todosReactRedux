const FILTER_ALL = "todos-filter __all";
const FILTER_COMPLETED = "todos-filter __completed";
const FILTER_ACTIVE = "todos-filter __active";

const updateFocusFilter = (filterClassName) => {
    document.getElementsByClassName(FILTER_ALL)[0].removeAttribute("style");
    document.getElementsByClassName(FILTER_COMPLETED)[0].removeAttribute("style");
    document.getElementsByClassName(FILTER_ACTIVE)[0].removeAttribute("style");

    let filterElement = document.getElementsByClassName(filterClassName)[0];
    filterElement.style.border = "2px solid #efefef";
    filterElement.style.borderRadius = "2px";
}

module.exports = updateFocusFilter;