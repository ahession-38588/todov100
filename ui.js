const listsContainer = document.getElementById("lists-container");
const addListBtn = document.getElementById("add-list-btn");

addListBtn.addEventListener("click", () => {
  const name = prompt("List name?");
  if (!name) return;
  createList(name);
});

function render() {
  listsContainer.innerHTML = "";

  state.lists.forEach(list => {
    const listEl = document.createElement("div");
    listEl.className = "list";

    const header = document.createElement("div");
    header.className = "list-header";
    header.textContent = list.name;

    header.addEventListener("click", () => {
      list.minimized = !list.minimized;
      saveState();
    });

    listEl.appendChild(header);

    if (!list.minimized) {
      const tasksEl = document.createElement("div");
      tasksEl.className = "list-tasks";

      list.tasks.forEach(task => {
        const taskEl = document.createElement("div");
        taskEl.className = "task";
        taskEl.textContent = task;
        tasksEl.appendChild(taskEl);
      });

      listEl.appendChild(tasksEl);
    }

    listsContainer.appendChild(listEl);
  });
}

render();
