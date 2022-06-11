<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{user.userName}}</h1>
      <h6 class="user-profile__admin-badge" v-if="user.isAdmin">Admin</h6>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong>{{followers}}
        <h2>
          {{user.userName}}
        </h2>



      </div>

      <form action="" class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot</strong> ({{newTwootCharacterCount}}/180)</label>
        <textarea name="newTwoot" id="newTwoot" cols="30" rows="4" v-model="newTwootContent"
          :class="{'--exceeded': newTwootCharacterCount > 180}"></textarea>
        <!-- <input type="file" name="newTwootImage" id="newTwootImage" v-on:change="uploadNewTwootImg"> -->
        <div style="display:flex;gap:10px;padding:10px;">
          <div class="user-profile__create-twoot-type">
            <label for="newTwootType"><strong>Type: </strong></label>
            <select name="newTwootType" id="newTwootType" v-model="selectedTwootType">
              <option :value="option.value" v-for="option in twootTypes" :key="option">{{option.name}}</option>
            </select>
          </div>

          {{twoot}}

          <button type="submit" class="btn">Twoot!</button>
        </div>

      </form>
    </div>

    <!-- @click="getContent" -->
    <div class="user-profile__twoots-wrapper">
      <TwootItem v-for="twoot in user.twoots" :userName="user.userName" :twoot="twoot" :id="twoot.id" :key="twoot.id"
        @favorite="toggleFavorite" />
      <div>
      </div>
    </div>


  </div>
</template>

<script>
import TwootItem from '../components/TwootItem.vue'
import {users} from '../assets/js/user.js'
import {useRoute} from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';
    export default {
      name: 'UserProfile',
      components: {
      TwootItem
      },
      data(){
        const route = useRoute();
        const store = useStore()
        const userId = computed(() => {
            return route.params.userId;
        })
        const twoot = computed(() => {
          return store.state.user.twoot
        })
        return {
          twoot,
          userId,
          newTwootContent: "",
          selectedTwootType: "instant",
          followers: 0,
          user: users[userId.value - 1] || users[0],
          response: "",
          twootTypes: [
            {value: "draft", name: "Draft"}, {value: "instant", name: "Instant Twoot"}
          ]
          }
      },
      watch: {
        followers(newFollowerCount, oldFollowerCount){
          if(oldFollowerCount < newFollowerCount){
            console.log(`${this.user.userName} has gained a new follower`)
          }else{
            console.log(`${this.user.userName} has lost a follower`)
          }
        },
        // likes(newLikeCount, oldLikeCount){
        //   if(newLikeCount > oldLikeCount){
        //     this.response = `Hi ${this.user.userName}, someone just liked your post. Click to view more.`
        //   }
        // }
      },
      computed:{
          newTwootCharacterCount(){
            return this.newTwootContent.length
        },
          
          
          
      },
      methods: {
        
        followUser(){
          this.followers++;
        },
        // getContent(e){
        //   console.log(e.target)
        // },
        likePost(){

        },
        commentOnPost(){
          
        },
        getUser(){
          
        },
        toggleFavorite(){
          console.log('hello world')
        },
        createNewTwoot(){
          if(this.newTwootContent && this.selectedTwootType !== "draft"){
            this.user.twoots.unshift({
              id: this.user.twoots.length + 1,
              content: this.newTwootContent,
            })
            this.newTwootContent = "";
          }else{
            console.log("Fill in empty field!")
          }
        }
      },
      mounted(){
        this.text = "Enter a value to change the text here."
        this.followUser()
        this.likePost()
        this.commentOnPost()
      }
    }
</script>

<style scoped>
    .user-profile{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        padding: 50px 5%;
    }
    .user-profile__user-panel{
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        box-shadow: -10px 10px 20px #dfe3e8;
    }
    .user-profile__admin-badge{
        background: rebeccapurple;
        padding: 5px 10px;
        margin-right: auto;
        border-radius: 5px;
        color: white;
        font-weight: bold
    }
    h1{
        margin:5px;
    }
    .user-profile__create-twoot{
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      
    }

    .--exceeded{
      color: red;
      outline:2px solid red  ;
    }

    .btn{
      background: #fde908;
      margin-left: auto;
      border: none;
      padding: 5px 15px;
      font-size: 13px;
      cursor: pointer;
    }
    
    
</style>
