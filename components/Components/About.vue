<template>
    <div class="about" >
     
        <div class="about__left">
            <h2 class="heading-2 about__left-title">{{data.Title}}</h2>
            <div class="about__left-texts">
                <p v-for="(text, index) in data.Texts" :key="index" :index="index" class="about__left-texts--text">{{text.Value}}</p>
            </div>
        </div>
        <div class="about__right">
            <img :src="data.Image.Src" :alt="data.Image.Alt" class="about__right-img">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: ''
    }
}
</script>

<style lang="scss">
    .about{
        @include mainPadding;
        display:grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto;
        column-gap: 3rem;
        margin: 12rem 0;
        @media only screen and (max-width: $bp-L) {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: auto 50rem;
        }
        @media only screen and (max-width: $bp-S) {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: auto 25rem;
            margin: 6rem 0;

        }
        &__left{
            grid-row: 1;
            grid-column: 1/6;
            display:flex;
            flex-direction: column;
            align-items: flex-start;
            @media only screen and (max-width: $bp-L) {
                grid-row: 1;
                grid-column: 3/11;
                margin-bottom: 4rem;
            }
            @media only screen and (max-width: $bp-S) {
                grid-row: 1;
                grid-column: 1/13;
            }
             @include IE {
                    margin-right: 3rem;
                }
            &-title{
                display:flex;
                flex-direction: column;
                margin-bottom: 2rem;
                &:before{
                    display: flex;
                    content:"";
                    height: 3px;
                    width: 120%;
                    background-color: $color-red;
                    margin-bottom: 1rem;
                }
            }
            &-texts{
                font-size: 2rem;
                width:100%;
               
                &--text{
                    text-indent: 5rem;
                    margin-bottom: .5rem;
                }
            }
        }
        &__right{
            grid-row: 1;
            grid-column: 6/13;
            @media only screen and (max-width: $bp-L) {
                grid-row: 2;
                grid-column: 1/13;
            }
            &-img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 2px;

            }
        }
    }
</style>