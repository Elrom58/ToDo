
//DOM-Elemente 
const list = document.getElementById("submit-history");
const form = document.getElementById("todo-form");


//EventHandler für das Submitevent
const handleSubmit = (event) => {

    event.preventDefault();

    const inputValue = document.getElementById("todo-input").value;

    if(inputValue === ""){
        window.alert("Bitte einen Wert eingeben!");
    } else {

    const newListItem = document.createElement("li");

    newListItem.innerHTML = `<div class='row mt-5'>
                            <div class='col-9'><input type='text' class='w-100' name='todo' value='${inputValue}' readonly></input></div>
                            <div class='col-3 text-end'><button name='update' type='button' class='btn btn-success'><i class="far fa-edit"></i> | Eintrag ändern</button>
                            <button type='button' name='delete' class='btn btn-danger del'><i class="far fa-trash-alt"></i> | Eintrag löschen</button></div></div>`;
    list.append(newListItem);
    document.getElementById("todo-input").value = "";
    }
};


const handleClick = (event) => {
    if(event.target.name === "delete") {
        handleRemove(event)
    } else if(event.target.name === "update") {
        handleUpdate(event)
    }    
}

// EventHandler, die durchgereicht werden
const handleRemove = (event) => {
    event.target.closest('li').remove();
}

const handleUpdate = (event) => {
    event.target.closest('li').children[0].children[0].children[0].value = prompt("Neuer Wert für dieses ToDo!");
}

//EventListener
form.addEventListener("submit", handleSubmit);
list.addEventListener("click", handleClick);


