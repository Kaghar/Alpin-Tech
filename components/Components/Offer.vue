<template>
    <div class="offer" :style="backgroundImage(data.Background)" id="offer">
        <div class="offer__container" >
            <div class="offer__top">
                <h2 class="heading-2 offer__top-title">{{data.Title}}</h2>
            </div>
            <div class="offer__bot">
                <Card v-for="(item, index) in data.Items"  :key="index" :index="index" :card="item" :lastItem=false />
                <Card :card="data.LastItem" :lastItem=true />
            </div>
            <div class="offer__mbBot">
                <Hooper ref="carousel" v-if="data.Items.length > 1" :settings="data.Settings">
                    <Slide v-for="(slide, index) in data.Items" :key="index" :index="index">
                        <Card :card="slide" :lastItem=false />
                    </Slide>
                    <Slide>
                        <Card :card="data.LastItem" :lastItem=true />
                    </Slide>
                    <HooperDots slot="hooper-addons"></HooperDots>
                </Hooper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: ''
    },
    methods: {
        backgroundImage(src){
            return `backgroundImage: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${src}')`
        },
        slidePrev() {
            this.$refs.carousel.slidePrev();
        },
        slideNext() {
            this.$refs.carousel.slideNext();
        },
        
    },
}
</script>

<style lang="scss" scoped>
    .offer{
        background-size: cover;
        background-attachment: fixed;
        padding: 10rem 0;
        &__container{
            display:flex;
            flex-direction: column;
            @include mainPadding;
        }

        &__top{
            align-self: flex-start;

            &-title{
                color: $color-white;
                display:flex;
                flex-direction: column;
                margin-bottom: 4rem;
                &:before{
                    display: flex;
                    content:"";
                    height: 3px;
                    width: 120%;
                    background-color: $color-red;
                    margin-bottom: 2rem;
                }
            }
        }

        &__bot{
            display:grid;
            grid-template-rows: auto;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 4rem;
            row-gap: 4rem;
            @media only screen and (max-width: $bp-XXL) {
                grid-template-rows: auto;
                grid-template-columns: repeat(2, 1fr);   
            }
            @media only screen and (max-width: $bp-M) {
                display:none;
            }
            @include IE {
                display:flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }
        &__mbBot{
            display:none;
            width: 100%;
            position: relative;
            & .hooper{
            height: 100%;
                & .hooper-slide{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                }
                & .hooper-pagination{
                    bottom:-2rem;
                }

            }
            @media only screen and (max-width: $bp-M) {
                display:flex;
                & .sliderCtrls{
                    top: -5rem;
                    right:2rem;
                }
            }
            @media only screen and (max-width: $bp-S) {
                & .sliderCtrls{
                    right:0rem;
                }
            }
        }
    }
</style>