<script>
export default {
  name: 'App',
}
</script>

<template>
  <div class="layout" id="app">
    <the-navbar />
    <main class="layout--content container">
      <router-view />
    </main>
    <the-footer class="layout--footer" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
