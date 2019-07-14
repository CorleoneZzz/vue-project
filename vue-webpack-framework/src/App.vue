<template>
    <!-- <div id="app">-->
    <!--    <h2 class="color-red">{{ text }}</h2>-->
    <!--  </div>-->
    <h2 class="color-red">{{ text }}</h2>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                text: "Hello, Vue!"
            };
        }
    }
</script>

<style scoped>
    .color-red {
        color: red;
    }
</style>
