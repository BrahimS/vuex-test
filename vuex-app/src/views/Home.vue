<template>
  <div class="home">
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList'

export default {
  name: "Home",
  props: ['todos'],
  components: {
    TodoList
  }
};
</script>
