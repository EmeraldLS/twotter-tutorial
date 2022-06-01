<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">@{{user.username}}</h1>
                  <h6 class="user-profile__admin-badge" v-if="user.isAdmin">Admin</h6>
            <div class="user-profile__follower-count">
                <strong>Followers: </strong>{{followers}}
                <p>{{response}}</p>
            </div>
        </div>
        <!-- @click="getContent" -->
  <div class="user-profile__twoots-wrapper">
    <TwootItem  v-for="twoot in user.twoots" :username="user.username" :twoot="twoot" :id="twoot.id" :key="twoot.id"  :likes="twoot.likes" :comment="twoot.comment" :image='twoot.image' @favorite="toggleFavorite"  />
  </div>
    </div>
</template>

<script>
import TwootItem from './TwootItem.vue'
    export default {
      name: 'UserProfile',
      components: {
      TwootItem
      },
      data(){
        return {
          followers: 0,
          response: "",
          user: {
            id: 1,
            username: "EmeraldLS",
            firstName: "Oluwasegun",
            lastName: "Lawrence",
            email : "lawrencesegun025@gmail.com",
            isAdmin: true,
            profileImage: "",
            twoots: [
              {
                id: 1, content: "Twooter is amazing",likes:12, comment: 23, image: "./images/emerald.jpg", imageAlt: "Shadow guy"
              }, {
                id: 2, content: "Don't forget to follow EmeraldLS on twitter",likes:4, comment: 18, image: "./images/logo.png", imageAlt: "Vue icon"
              }
            ]
          },
          }
      },
      watch: {
        followers(newFollowerCount, oldFollowerCount){
          if(oldFollowerCount < newFollowerCount){
            console.log(`${this.user.username} has gained a new follower`)
          }else{
            console.log(`${this.user.username} has lost a follower`)
          }
        },
        likes(newLikeCount, oldLikeCount){
          if(newLikeCount > oldLikeCount){
            this.response = `Hi ${this.user.username}, someone just liked your post. Click to view more.`
          }
        }
      },
      computed:{
          fullName(){
            return `${this.user.firstName} ${this.user.lastName}`
          }
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
        toggleFavorite(){
          console.log('hello world')
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

<style>
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
</style>
