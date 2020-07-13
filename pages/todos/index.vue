<template>
  <to-do-list :items="items" />
</template>

<script>
export default {
  name: 'todos-index',

  data() {
    return {
      items: [],
    }
  },

  created() {
    this.getAll();
  },

  methods: {
    getAll() {
      this.$axios.get('todos')
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>
