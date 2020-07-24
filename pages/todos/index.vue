<template>
  <to-do-list :items="all" />
</template>

<script>
export default {
  name: 'todos-index',

  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.$store.dispatch('todos/fetch');
    },

  },

  computed: {
    all() {
      return this.$store.getters['todos/all'];
    },

    completed() {
      return this.$store.getters['todos/completed'];
    },

    uncompleted() {
      return this.$store.getters['todos/uncompleted'];
    },
  },

}
</script>
