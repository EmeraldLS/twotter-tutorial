<template>
    <div class="about">
        <h3>About Us</h3>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
    name: "AboutView",
    components: {

    },
    data() {
        const route = useRoute();
        const about_me = computed(() => {
            return route.params.about_me
        })
        return {
            about_me
        }
    }
}

</script>

<style>
</style>
