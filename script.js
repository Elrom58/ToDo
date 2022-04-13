
//DOM-Elemente 
const list = document.getElementById("submit-history");
const form = document.getElementById("todo-form");
//const toDoObj = [];

const toDoObj = JSON.parse(localStorage.getItem('toDoList'));

if(toDoObj.length !== 0) {
    for(let i = 0; i < toDoObj.length; i++){
        
        console.log(toDoObj[i].todo);
        console.log(toDoObj[i].checked);
        let check;

        if(toDoObj[i].checked === true){
             check = "checked";
        } else {
             check = "";
        }    


        const historyListItem = document.createElement("li");
        historyListItem.innerHTML = `<div class='row mt-5'>
                            <div class='col-6'><input type='text' class='w-100' name='todo' value='${toDoObj[i].todo}' readonly></input></div>
                            <div class='col-6 text-end'><input type='checkbox' name='done' ${check}> Erledigt &nbsp;&nbsp;<button name='update' type='button' class='btn btn-success'><i class="far fa-edit"></i> | Eintrag ändern</button>
                            <button type='button' name='delete' class='btn btn-danger del'><i class="far fa-trash-alt"></i> | Eintrag löschen</button></div></div>`;
        
        list.append(historyListItem);
        

    }
}

//EventHandler für das Submitevent
const handleSubmit = (event) => {

    event.preventDefault();

    const inputValue = document.getElementById("todo-input").value;

    if(inputValue === ""){
        window.alert("Bitte einen Wert eingeben!");
    } else {

    const newListItem = document.createElement("li");

    newListItem.innerHTML = `<div class='row mt-5'>
                            <div class='col-6'><input type='text' class='w-100' name='todo' value='${inputValue}' readonly></input></div>
                            <div class='col-6 text-end'><input type='checkbox'name='done'> Erledigt &nbsp;&nbsp;<button name='update' type='button' class='btn btn-success'><i class="far fa-edit"></i> | Eintrag ändern</button>
                            <button type='button' name='delete' class='btn btn-danger del'><i class="far fa-trash-alt"></i> | Eintrag löschen</button></div></div>`;
    list.append(newListItem);

    toDoObj.push({todo :inputValue, checked: false}); 
    document.getElementById("todo-input").value = "";
    
    Object.keys(toDoObj).forEach(key => {
        console.log(key, toDoObj[key]);
      });

    }
};

const handleClick = (event) => {
    if(event.target.name === "delete") {
        handleRemove(event)
    } else if(event.target.name === "update") {
        handleUpdate(event)
    } else if (event.target.name === "done") {
        handleDone(event)
    }   
}

// EventHandler, die durchgereicht werden
const handleRemove = (event) => {
    const listItem = event.target.closest('li').children[0].children[0].children[0].value;
    objIndex = toDoObj.findIndex((toDoObj => toDoObj.todo == listItem));
    if (objIndex > -1) {
        toDoObj.splice(objIndex, 1);
      }   
    event.target.closest('li').remove();
}

const handleUpdate = (event) => {
    event.target.closest('li').children[0].children[0].children[0].value = prompt("Neuer Wert für dieses ToDo!");
}

const handleDone = (event) => {
    const listItem = event.target.closest('li').children[0].children[0].children[0].value;
    const doneItem = event.target.closest('li').children[0].children[1].children[0].checked;

    objIndex = toDoObj.findIndex((toDoObj => toDoObj.todo == listItem));
  
    //Log object to Console.
    console.log("Before update: ", toDoObj[objIndex])

    if(toDoObj[objIndex].checked === false){
        toDoObj[objIndex].checked = true;
    } else {
        toDoObj[objIndex].checked = false;
    }
    console.log("After update: ", toDoObj[objIndex])
}

const handleUnload = (event) => {
    localStorage.setItem('toDoList', JSON.stringify(toDoObj));
}

//EventListener
form.addEventListener("submit", handleSubmit);
list.addEventListener("click", handleClick);
window.addEventListener("unload", handleUnload);




