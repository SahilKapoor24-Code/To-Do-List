let Myinput = document.querySelector(".Myinput");
let AddButton = document.querySelector(".Add_img");
let ListContainer = document.querySelector(".list-container");

//To add list items.
AddButton.addEventListener("click", addItem);
function addItem() {
    if (Myinput.value === '') {
        alert("\" You have to type something \"");
    }
    else {
        let Li = document.createElement("li");
        Li.textContent = Myinput.value;
        ListContainer.appendChild(Li);
        let MyDustbin = document.createElement("img");
        MyDustbin.src = "./assets/img/cross.png";
        MyDustbin.alt = "Delete";
        MyDustbin.style.cursor = "pointer";
        Li.appendChild(MyDustbin);
    }
    Myinput.value = "";
    saveData();
}
ListContainer.addEventListener("click", (event) => {
    //To select or deselect the List item.
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("Checked");
        saveData();
    }
    //To deleted List item.
    else if (event.target.tagName === "IMG") {
        event.target.parentElement.remove();              //Parent element i.e. Li will be removed.
        saveData();
    }
})
//Data save function.
function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);
}
//Data load function.
function showTask() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        ListContainer.innerHTML = savedData;
    }
}
showTask();