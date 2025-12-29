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
