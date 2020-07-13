<template>

  <v-form>

    <v-text-field v-model="item.title" label="Title" required></v-text-field>
    <v-select v-model="item.category" :items="categories" item-value="id" item-text="title" label="Category" required></v-select>
    <v-textarea v-model="item.notes" label="Notes"></v-textarea>
    <v-btn @click="submit">{{ item.id ? 'Update' : 'Create' }}</v-btn>

  </v-form>

</template>

<script>
export default {
  name: 'ToDoForm',

  data() {
    return {
      item: {
        id: null,
        title: null,
        category: null,
        notes: null,
        completed: false,
      },
    }
  },

  props: {
    categories: {
      types: Array,
      required: true,
    }
  },

  methods: {
    submit() {
      this.$emit('submit', this.item);
    },
  }
}
</script>
