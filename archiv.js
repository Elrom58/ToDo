//Elemente ansprechen, die wir manipulieren wollen
//const button = document.getElementById("btn");
//const container = document.getElementById("app");
const list = document.getElementById("submit-history");
const form = document.getElementById("input-form");

//EventHandler für das Klickevent
/*
const handleClick = (event) => {
  console.log(event);
  event.target.innerHTML = "Ich wurde geklickt";
  event.target.style.backgroundColor = "#ffffff";
  const newDiv = document.createElement("div");
  newDiv.innerHTML = "<p>Ich wurde von Klick kreiert</p>";
  container.append(newDiv);
};
*/

//EventHandler für das Submitevent
const handleSubmit = (event) => {
  //Standardverhalten von forms ist, die Seite
  //nach dem Submit neu zu laden, hiermit können wir das unterdrücken:
  event.preventDefault();
  //console.log(event.target[0].value); //Nicht nachhaltig
  const inputValue = document.getElementById("todo-input").value;
  const newListItem = document.createElement("li");


  newListItem.InnerHTML = "<div class='row mt-5'><div class='col-9'>Text</div><div class='col-3 text-end'><button type='button' class='btn btn-success'>Eintrag ändern</button><button type='button' class='btn btn-danger'>Eintrag löschen</button></div></div>";




  //newListItem.innerText = `Du hast "${inputValue}" geschrieben`;
  list.append(newListItem);
  document.getElementById("todo-input").value = "";
};

//Dem Button-Element einen EventListener anhängen
//Mit addEventListener (empfohlen):
// button.addEventListener("click", handleClick);
//Mit onevent (lässt uns die Event propagation nicht beeinflussen):
//button.onclick = handleClick;
//Dem Formular einen EventListener anhängen
form.addEventListener("submit", handleSubmit);
