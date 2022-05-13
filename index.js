let inputDom = document.querySelector("#task")
let buttonDom = document.querySelector("#liveToastBtn")
let ulDom = document.querySelector("#list")
let closeDom = '<span onclick="removeElement(this)" class="close" >&#215 </span>';
let listLiDom = document.querySelectorAll("#list li");
buttonDom.onclick = createElement;
function createElement(click) {
    click.preventDefault()
    if (inputDom.value === "" || inputDom.value === " ") {
        $(".error").toast("show");
        inputDom.value = ""
    }
    else {

        addItem(inputDom.value)
        inputDom.value = ""
        $(".success").toast("show");
    }
}


const addItem = (inputDom) => {
    let liDom = document.createElement("li")
    liDom.innerHTML = `${inputDom}${closeDom}`
    ulDom.appendChild(liDom)
    liDom.onclick = checked;
}


for (let i = 0; i < listLiDom.length; i++) {
    listLiDom[i].innerHTML += closeDom
    listLiDom[i].onclick = checked;
}

function checked() {
    if (this.classList.contains("checked")) {
        this.classList.remove("checked");
    } else {
        this.classList.add("checked");
    }
}

function removeElement(event) {
    event.parentNode.parentNode.removeChild(event.parentNode);
}