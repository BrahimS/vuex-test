<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{todo.task}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['todos']
  }
</script>

<style lang="scss" scoped>

</style>