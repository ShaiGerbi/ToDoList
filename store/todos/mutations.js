export default {

  set(state, todos) {
    state.list = todos;
  },

  add(state, todo) {
    state.list.push(todo);
  },

  update(state, todo) {
    const item = state.list.find(item => item.id === todo.id);
    item.title = todo.title;
    item.category = todo.category;
    item.completed = todo.completed;
    item.notes = todo.notes;
  },

  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },

};
