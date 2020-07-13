<template>
  <to-do-form @submit="submit" :categories="categories" />
</template>

<script>
export default {
  name: 'todo_id',

  data() {
    return {
      id: this.$route.params.id,
      categories: [],
    }
  },

  created() {
    this.getById();
    this.getCategories();
  },

  methods: {
    getById() {
      this.$axios.get(`todos/${this.id}`)
        .then(response => {
          this.item = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getCategories() {
      this.$axios.get('categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    submit(e) {

      const todo = {
        id: e.id,
        title: e.title,
        category: e.category,
        completed: e.completed,
        notes: e.notes,
      };

      if(e.id) {
        this.update(todo);
      }
      else {
        this.store(todo);
      }
    },

    store(item) {
      this.$axios.post('todos', item)
        .then(response => {
          if(response.status === 201) {
            this.$router.push('/todos');
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    update(item) {
      this.$axios.put(`todos/${item.id}`, item)
        .catch(error => {
          console.log(error);
        });
    },
  },
}
</script>
