<template>
  <div class="home">
    <h1>Home Page</h1>
    <div class="users">
            <router-link  v-for="user in users" :key="user.userName" :to="{name: 'UserProfile', params: {userId: user.id}}">
                   {{user.userName}}  - {{user.id}}
            </router-link>
    </div>
  </div>
</template>

<script>
    import {users} from "../assets/js/user.js"
export default {
  name: 'HomeView',
  data(){
    
      return {
          users,
      }
  }
}
</script>

<style>
    .home{
        padding: 10px;
    }
    .users{
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        margin: 5px auto;
    }
</style>
