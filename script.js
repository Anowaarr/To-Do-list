let input = document.getElementById("input");
let listcontainer = document.getElementById("listcontainer");

let handleClick = () => {
    if (input.value.trim() === "") {
        alert("Please enter something!");
        return;
    }

    let list = document.createElement("li");
    let text = document.createElement("span");
    text.innerHTML = input.value;

    let spanEdit = document.createElement("span");
    spanEdit.innerHTML = "Edit";

    let spanDelete = document.createElement("span");
    spanDelete.innerHTML = "✖";

    list.appendChild(text);
    list.appendChild(spanEdit);
    list.appendChild(spanDelete);

    listcontainer.appendChild(list);
    input.value = "";

    spanDelete.addEventListener("click", () => {
        text.style.textDecoration = "line-through";
        text.style.color = "gray";
    });

    spanEdit.addEventListener("click", () => {
        input.value = text.innerHTML;
        list.remove();
    });
}