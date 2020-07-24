export default {

  all(state) {
    return state.list;
  },

  completed(state) {
    return state.list.filter(item => {
      return item.completed === true;
    });
  },

  uncompleted(state) {
    return state.list.filter(item => {
      return item.completed === false;
    });
  },

};
