export default {

  async fetch({ commit }) {
    await this.$axios
      .get('todos')
      .then(response => {
        if(response.status === 200) {
          commit('set', response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  async find({ commit }, id) {
    await this.$axios
      .get(`todos/${id}`)
      .then(response => {
        if(response.status === 200) {
          commit('set', response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  async store({ commit }, data) {
    await this.$axios
      .post('todos', data)
      .then(response => {
        if(response.status === 201) {
          commit('add', response.data);
          //this.$router.push('/todos'); response.data.id
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  async update({ commit }, data) {
    await this.$axios
      .patch(`todos/${data.id}`, data)
      .then(response => {
        if (response.status === 200) {
          commit('update', response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  async remove({ commit }, todo) {
    await this.$axios
      .delete(`todos/${todo.id}`)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          commit('remove', todo);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

};
