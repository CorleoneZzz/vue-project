<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
    import Heador from "../public/header.vue"
    import Slider from "./hslider.vue"
    import Novice from "./novice.vue"
    import Borrow from "./borrow.vue"
    import Money from "./money.vue"
    import Product from "./product";
    import Life from "./life";
    import Footer from "../public/footer.vue"
    import Navbar from "../public/navbar";

    export default {
        components: {
            Heador,
            Slider,
            Novice,
            Borrow,
            Money,
            Product,
            Life,
            Footer,
            Navbar,
        },
    }
</script>
