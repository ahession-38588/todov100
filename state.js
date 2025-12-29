const state = {
  lists: [],
};

function createList(name) {
  state.lists.push({
    id: crypto.randomUUID(),
    name,
    minimized: false,
    tasks: []
  });
  saveState();
}

function addTaskToList(listId, taskText) {
  const list = state.lists.find(l => l.id === listId);
  if (!list) return;

  list.tasks.push({
    id: crypto.randomUUID(),
    text: taskText
  });

  saveState();
}
