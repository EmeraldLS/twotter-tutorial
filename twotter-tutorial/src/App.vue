<template>
  <div id="app">
    <nav>

      <router-link to="/">
        Twotter
      </router-link>


      <div class="nav-link">
        <router-link :to="{ name: 'AboutView', params:  {about_me: about_user.id}}">About</router-link>
        <h3 v-if="user">{{ user.userName }}</h3>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: "App",
  data() {
    const store = useStore();
    const user = computed(() => store.state.User.user)
    
    return {
      user,
      about_user: {
        id: 1
      }
    }
  }
  
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

nav{
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  
}

</style>
