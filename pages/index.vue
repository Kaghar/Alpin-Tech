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
import axios from 'axios'
export default {
    asyncData(context){
        return axios.get(`https://alpin-tech-f040f-default-rtdb.europe-west1.firebasedatabase.app/Front.json`)
        .then(result => {
            return {
                navigation: result.data.Navigation,
                header: result.data.Header,
                about: result.data.About,
                offer: result.data.Cards,
                gallery: result.data.Gallery,
                footer: result.data.Footer
            }
        })
        .catch(e => context.error(e))
    }
}
</script>
<style scoped lang="scss">
    .frontPage{
        overflow: hidden;
    }
</style>