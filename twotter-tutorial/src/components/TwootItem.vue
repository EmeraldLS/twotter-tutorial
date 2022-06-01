<template>
    <div class="twoot-item" @click="favoriteTwoot(id)">
        <div class="user-profile__twoot">
            <h3 class="twoot-item__user">
                <span>
                    @{{username}}
                </span>
                <img :src="twoot.image" :alt="twoot.imageAlt" class="twoot-image" />
                
            </h3>
            <div class="twoot-item__content">
               <p> <!--{{id}} - --> {{twoot.content}}</p> 
                <p> <span>You have : {{likes}} likes</span> and <span>{{comment}} comments</span></p>
                
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        },
        id: {
            type: Number,
            required: true,
        },
        likes: {
            type: Number,
            required: true
        },
        comment: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    methods: {
        favoriteTwoot(id){
            console.log(`Favorited twoot : ${id}`)
            this.$emit['favorite', id]
        }
    }
}
</script>

<style>
    .twoot-item{
        background-color: white;
        padding: 20px;
        border: 5px;
        box-shadow: -10px 10px 10px #dfe3e8;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.25s ease;
        margin: 10px;
    }
    .twoot-item:hover{
        transform: scale(1.1, 1.1);
    }

    .twoot-item__user{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .twoot-item__user span{
        font-weight: bold;
    }
    .twoot-item__content{
        margin: 10px;
    }
    .twoot-image{
        height: 50px;
        border-radius: 100%;
    }
</style>
