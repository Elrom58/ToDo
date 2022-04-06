
//DOM-Elemente 
const list = document.getElementById("submit-history");
const form = document.getElementById("todo-form");


//EventHandler für das Submitevent
const handleSubmit = (event) => {

    event.preventDefault();

    const inputValue = document.getElementById("todo-input").value;
    const newListItem = document.createElement("li");

    newListItem.innerHTML = `<div class='row mt-5'>
                            <div class='col-9'><input type='text' class='w-100' name='todo' value='${inputValue}'></input></div>
                            <div class='col-3 text-end'><button type='button' class='btn btn-success'>Eintrag ändern</button>
                            <button type='button' class='btn btn-danger del'><i class="fa fa-trash" aria-hidden="true"></i> | Eintrag löschen</button></div></div>`;
    //dem button auch ein name attribute geben (name="del")
    list.append(newListItem);
    document.getElementById("todo-input").value = "";
};



//erstelle handleClick (EventHandler)
//const handleClick = (event) => {
    //if statement evaluieren ob das e.target, name === "del" || name === "edit"
    //darauf basierend das event in die jeweilige Funktion (zB zu handleRemove) weiterleiten
 /*   if(event.target.name === "del") {
        handleRemove(event)
    } else 

}
*/

// Als Arrowfunction 
const handleRemove = (event) => {
    event.target.closest('li').remove();
}


//EventListener
form.addEventListener("submit", handleSubmit);
//list.addEventListener("click", handleClick);
list.addEventListener("click", handleRemove);  


