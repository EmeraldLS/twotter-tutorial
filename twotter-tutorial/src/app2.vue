<template>
  <div id="app">
    @{{user.username}} - {{fullName}}
    <strong>Followers: </strong> {{followers}}
    <div class="follows_content">
      <button @click="followUser">Follow</button>
      <button @click="unFollowUser">Unfollow</button>
    </div>
    <input type="text" @input="onInput">
    {{text}}
    <h4>My first post</h4>
    <div>
      <h1>What can you do for her?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam facilis, numquam nesciunt, minus at, eveniet harum illum dignissimos ad eum dolores explicabo beatae voluptatum accusamus blanditiis impedit incidunt. A!</p>
    </div>
    <h3><strong>No of likes : {{likes}} </strong></h3> 
    <button @click="toggleLike">Like Post</button>
    {{likedResponse}}
        
    <div id="series-section">
        <label for="movies">Tv Series</label>
        <input type="text" :id="series_search" class="series" :placeholder="series_search.value" @input="search_movie">
        {{series_search.value}}
        {{series_search.movies}}
        <button :disabled="series_search.isDisabled">Can i be disabled? </button>
    </div>
    <div v-bind="headerContent"></div>
    <div v-bind="footerContent">
        <a :href="footerContent.logo.link" v-html="footerContent.logo.caption"></a>
        <ul v-bind="footerContent.listContent">
            <li v-for="(list) in footerContent.lists" :key="list" :class="list.class">
                <a :href="list.url">{{list.name}}</a>  
            </li>
        </ul>
    </div>
    <p>Has published books: </p>
    <span>{{noPublishedBooks}}</span>
    <div v-bind="CategoryContent">
        <p>Category Selected: {{category}}</p>
        <select :name="categoriesAvailable" @change="categorySelected"  :id="categoriesAvailable">
            <option disabled value="" selected>Please Select an option</option>
            <option :value="cat"  v-for="(cat) in categoryListAvailable" :key="cat">{{cat}}</option>
        </select>
    </div>
    <div>
        <input ref="input">
        <buttonCounter />
        <buttonCounter />
        <buttonCounter />
        <div v-bind="BlogPostSection" >
            <BlogPost  postTitle="Basic neccesities of life" postContent="lorem is working here" />
            <BlogPost />
            <BlogPost />
        </div>
    </div>
  </div>
</template>

<script>

import ButtonCounter from "./components/ButtonCounter.vue"
import BlogPost from "./components/BlogPost.vue"
export default {
  name: 'App',
  components: {
      ButtonCounter,
      BlogPost
  },
  data(){
    return {
      greeting: "Hello world",
      text: "",
      followers: 0,
      likes: 0,
      series: {
          marginTop: "10px",
      },
      liked: false,
      likedResponse: "",
      author: {
          name : "Lawrence Oluwasegun",
          publisher: "Lawrence Enterprise",
          books: ["How to make it", "Basic life necessities", "God is wllling"]
      },
      user: {
        id: 1,
        username: "EmeraldLS",
        firstName: "Oluwasegun",
        lastName: "Lawrence",
        email : "lawrencesegun025@gmail.com",
        isAdmin: true
      },
      series_search: {
        value: "Hello world",
        movies: [],
        isDisabled: true
      },
      BlogPostSection: {
          style: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            flexDirection: "row",
            gap: "10px",
            margin: "10px"
          }
      },
      headerContent: {
          id: "container",
          class: "wrapper",
          style: {
              marginTop: "50px",
              height: "150px",
              width: "150px",
              backgroundColor: "red"
          }
      },
      footerContent: {
          logo: {
              link: "https://phsps.com",
              caption: "PHSPS"
          },
          lists: [
              {name: "Home", class: "list-item", url: "home"},
              {name: "About", class: "list-item", url: "about"},
              {name: "Services", class: "list-item", url: "services"},
              ],
          style: {
              display: "flex",
              width: "100%",
              height: "50px",
              backgroundColor: "#fde908",
              flexFlow: "wrap",
              justifyContent: "space-between",
          },
          listContent: {
              style: {
                  display: "flex",
                  listStyle: "none",
                  gap: "10px",
                  
              }
          }
      },
      CategoryContent: {
          style: {
              margin: "20px",
          },
          categories: {
              id: "categories",
              category: "hello"
          },
          categoryList: ["Option A", "Option B", "Option C", "Option D"]
      }
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
        if(oldLikeCount < newLikeCount){
            console.log(`Hi ${this.user.username}, someone just liked your post`)
        }
        else{
            console.log(`Hi ${this.user.username}, someone just unliked your post`)
        }
    }
  },
  computed:{
      fullName(){
        return `${this.user.firstName} ${this.user.lastName}`
      },
      noPublishedBooks(){
          return this.author.books.length > 0 ? `You have ${this.author.books.length} books remaining in your stock`: `You have no book in stock`
      },
      categoriesAvailable() {
          return this.CategoryContent.categories.id
      },
      categoryListAvailable(){
          return this.CategoryContent.categoryList
      },
      category(){
          return this.CategoryContent.categories.category
      }
  },
  methods: {
      categorySelected(e){
          this.CategoryContent.categories.category = e.target.value
      },
    async search_movie(e){
      const res = await fetch("series.json");
      const results =  await res.json();
    results.filter((result) => {
        if(e.target.value == ""){
            this.series_search.movies = [];
        }
        else if(result.name.toUpperCase().includes(e.target.value.toUpperCase())){
            this.series_search.movies.push(result);
            console.log(result)
        }else{
            this.series_search.movies = ["movie not found"]
        }
         
    })
    },
    onInput(e){
        if(e.target.value == ""){
            this.text = "Enter a value to change the text here."
        }else{
            this.text = e.target.value
        }
    },
    followUser(){
      this.followers++;
    },
    unFollowUser(){
      if(this.followers <= 0){
        return false
      }else{
        this.followers--;
      }
      
    },
    toggleLike(){
      if(this.liked == true){
        this.liked = false
        this.likedResponse =  "Post unliked"
        this.likes--
        return false
      }{
        this.liked = true;
        this.likedResponse = "post liked";
        this.likes++
      }
    }
  },
  mounted(){
    this.text = "Enter a value to change the text here."
    this.followUser();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  text-align: center;
}
#series-section{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.series{
  width: 150px;
  padding: 10px;
  border: 0;
  outline: 0;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
}
.logo{
  height: 150px;
}
</style>
