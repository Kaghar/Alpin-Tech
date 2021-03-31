<template>
    <section class="frontPage">
        <Nav :navigation="navigation" />
        <StartHero :header="header"/>
        <About :data="about"/> 
        <Offer :data="offer"/>
        <Gallery :data="gallery"/>
        <MainFooter :footer="footer"/> 
       
    </section>
</template>
<script>
export default {
     async asyncData({ $content }) {
        const result = await $content('fullContent/fullFront').fetch()
            return {
                navigation: result.Front.Navigation,
                header: result.Front.Header,
                about: result.Front.About,
                offer: result.Front.Cards,
                gallery: result.Front.Gallery,
                footer: result.Front.Footer
            }
    }
}
</script>
<style scoped lang="scss">
    .frontPage{
        overflow: hidden;
    }
</style>