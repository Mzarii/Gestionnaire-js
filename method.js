const formSubmit = document.querySelector("#add");
const tasks = document.querySelector(".task-box ul");
const clear = document.querySelector("#clear");
const ruselt = document.querySelector(".result");
const formSerche = document.querySelector("#srch");

formSerche.addEventListener("submit", (even) => {
  even.preventDefault();
  const sTask = formSerche.stask.value.trim();
  const sTasks = tasks.querySelectorAll("li");
  sTasks.forEach((elm) => {
    if (!elm.textContent.includes(sTask)) {
      elm.classList.add("hide");
    } else elm.classList.remove("hide");
  });

  console.log(sTask);
  formSubmit.reset();
});

//Une fonction pour compter le nombre de tâches

function calcRuselt() {
  const taskLength = tasks.querySelectorAll("li").length;
  ruselt.textContent = `vous avez ${taskLength} tâches en attente !`;
}
calcRuselt();

//ajout un tache

formSubmit.addEventListener("submit", (even) => {
  even.preventDefault();
  const valeur = formSubmit.task.value.trim();
  if (valeur.length != 0) {
    tasks.innerHTML =
      `<li>
    <span>${valeur}</span>
    <i class="bi bi-x-square-fill"></i>
  </li>` + tasks.innerHTML;
  } else alert("Vous devez ajouter une tâche");
  formSubmit.reset();
  calcRuselt();
});

//Effacer un tache

tasks.addEventListener("click", (even) => {
  if (even.target.classList.contains("bi")) {
    even.target.parentElement.remove();
  }
  calcRuselt();
});

//Effacer tout les taches

clear.addEventListener("click", () => {
  const taskItem = tasks.querySelectorAll("li");
  taskItem.forEach((item) => {
    item.remove();
  });
  calcRuselt();
});
