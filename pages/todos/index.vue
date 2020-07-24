<template>
  <to-do-list :items="all" />
</template>

<script>
import index from '@/mixins/index';

export default {
  name: 'todos-index',

  mixins: [index],

  created() {
    this.page = 'todos';
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
