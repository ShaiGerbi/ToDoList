<template>
    <v-app-bar fixed app>

        <v-toolbar-title>ToDoList</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
