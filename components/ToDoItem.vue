<template>

  <v-list-item>

    <v-list-item-content>
      <v-list-item-title v-text="title"></v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-chip-group>
        <v-chip small>{{ category }}</v-chip>
        <v-chip small>{{ completed }}</v-chip>
      </v-chip-group>
    </v-list-item-action>

  </v-list-item>

</template>

<script>
export default {
  name: 'ToDoItem',

  props: {
    title: {
      required: true,
      type: String,
    },
    category: {
      required: false,
      type: String,
    },
    completed: {
      required: true,
      type: Boolean,
      default: false,
    },
  }
}
</script>
