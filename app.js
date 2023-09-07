const inputbox = document.getElementById("input-box");
const lists = document.getElementById("list");
addtask = () => {
    if(inputbox.value === ''){
        alert('you must enter something');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);
    }
    inputbox.value = '';
}

lists.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
    }
})
