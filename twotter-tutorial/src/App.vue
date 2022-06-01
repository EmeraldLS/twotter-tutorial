<template>
  <div id="app">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from "./components/userProfile.vue";
export default {
  name: "App",
  components: {
    UserProfile,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background: #f3f5fa;
}
</style>
