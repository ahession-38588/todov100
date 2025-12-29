function saveState() {
  localStorage.setItem("fantasyTodoState", JSON.stringify(state));
  render();
}

function loadState() {
  const saved = localStorage.getItem("fantasyTodoState");
  if (saved) {
    const parsed = JSON.parse(saved);
    state.lists = parsed.lists || [];
  }
}

loadState();
