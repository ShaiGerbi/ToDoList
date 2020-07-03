<template>

  <v-card>
    <v-list nav>

      <to-do-item v-for="item in items" :key="item.id" :title="item.title" :completed="item.completed" />

    </v-list>
  </v-card>

</template>

<script>
export default {
  name: 'ToDoList',

  props: {
    items: {
      required: true,
      types: Array,
    }
  },
}
</script>
