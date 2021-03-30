<template>
    <div class="card">
        <div class="card__top">
            <img :src="card.Img.Src" :alt="card.Img.Alt" class="card__top-img">
        </div>
        <div class="card__bot">
            <h3 class="heading-3 card__bot-title">{{card.Title}}</h3>
            <div class="card__bot-items" v-if="lastItem == false">
                <p v-for="(text, index) in card.List" :key="index" :index="index" class="card__bot-items--item">{{text.Value}}</p>
            </div>
            <div class="card__bot-items" v-else-if="lastItem == true">
                <div class="card__bot-items--diffItem" v-for="(item, index) in card.List" :key="index" :index="index">
                    <div v-if="item.Icon== 'photo'" class="card__bot-items--diffItem--svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
                    </div>
                    <div v-else-if="item.Icon== 'smile'" class="card__bot-items--diffItem--svg">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"/></svg>
                    </div>
                    <div v-else-if="item.Icon== 'snow'" class="card__bot-items--diffItem--svg">
                        <svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 219.781 219.781" style="enable-background:new 0 0 219.781 219.781;" xml:space="preserve">
                            <path d="M202.314,154.591l-22.323-12.888l19.345-11.407c3.568-2.104,4.755-6.702,2.651-10.27c-2.104-3.567-6.701-4.754-10.27-2.651
                            l-26.648,15.713l-40.179-23.198l40.172-23.194l26.656,15.711c1.195,0.705,2.507,1.039,3.801,1.039c2.568,0,5.069-1.32,6.468-3.693
                            c2.103-3.568,0.915-8.166-2.653-10.27L179.986,78.08l22.328-12.891c3.587-2.071,4.816-6.658,2.745-10.245
                            c-2.071-3.588-6.658-4.817-10.245-2.745l-22.323,12.889l-0.203-22.461c-0.037-4.142-3.435-7.489-7.567-7.432
                            c-4.142,0.037-7.47,3.425-7.432,7.567l0.279,30.941L117.391,96.9V50.51l26.937-15.224c3.606-2.038,4.877-6.613,2.839-10.22
                            c-2.038-3.606-6.614-4.878-10.22-2.839L117.391,33.28V7.5c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v25.78
                            L82.835,22.228c-3.608-2.039-8.181-0.768-10.22,2.839c-2.038,3.606-0.767,8.182,2.839,10.22l26.936,15.224V96.9L62.213,73.703
                            l0.279-30.941c0.038-4.142-3.29-7.53-7.432-7.567c-0.023,0-0.045,0-0.069,0c-4.11,0-7.461,3.313-7.498,7.433L47.29,65.088
                            L24.967,52.199c-3.587-2.072-8.174-0.842-10.245,2.745c-2.071,3.587-0.842,8.174,2.745,10.245L39.794,78.08L20.443,89.485
                            c-3.568,2.103-4.756,6.701-2.653,10.27c1.399,2.373,3.9,3.693,6.469,3.693c1.294,0,2.605-0.335,3.801-1.039l26.659-15.711
                            l40.173,23.194l-40.18,23.198L28.06,117.374c-3.566-2.103-8.166-0.917-10.27,2.651c-2.104,3.568-0.917,8.166,2.651,10.269
                            l19.348,11.408l-22.323,12.888c-3.587,2.071-4.816,6.658-2.745,10.245c1.389,2.406,3.91,3.751,6.502,3.751
                            c1.272,0,2.562-0.324,3.743-1.006l22.323-12.889l0.203,22.462c0.037,4.119,3.388,7.433,7.498,7.433c0.023,0,0.046,0,0.069-0.001
                            c4.142-0.037,7.47-3.425,7.432-7.567l-0.279-30.942l40.178-23.197v46.391l-26.936,15.224c-3.606,2.038-4.877,6.613-2.839,10.22
                            c1.379,2.44,3.92,3.811,6.536,3.811c1.25,0,2.518-0.313,3.684-0.972l19.556-11.052v25.78c0,4.142,3.358,7.5,7.5,7.5
                            c4.142,0,7.5-3.358,7.5-7.5v-25.78l19.556,11.052c1.166,0.659,2.433,0.972,3.684,0.972c2.616,0,5.157-1.371,6.536-3.811
                            c2.038-3.606,0.767-8.182-2.839-10.22l-26.937-15.224V122.88l40.177,23.196l-0.286,30.941c-0.039,4.142,3.288,7.531,7.43,7.569
                            c0.024,0.001,0.047,0.001,0.071,0.001c4.109,0,7.46-3.313,7.498-7.431l0.208-22.465l22.326,12.89
                            c1.181,0.682,2.471,1.006,3.743,1.006c2.592,0,5.113-1.346,6.502-3.751C207.131,161.249,205.902,156.662,202.314,154.591z"/>
                        </svg>
                    </div>
                    
                    <p>{{item.Text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        card: '',
        lastItem: ''
    }
}
</script>

<style lang="scss" scoped>
.card{
    display:flex;
    flex-direction: column;
    @media only screen and (max-width: $bp-M) {
        width: 100%;
    }
    @include IE {
        width:50rem
    }   
    &__top{
        height: 30rem;
        border-radius: 2px;
        position: relative;
        @include IE {
        overflow: hidden;

        }
        @media only screen and (max-width: $bp-XXL) {
            height: 45rem;

        }
        @media only screen and (max-width: $bp-XL) {
            height: 35rem;

        }
        &-img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            @include IE {
                @include IE-object-fit-H
            }
        }
    }

    &__bot{
        background-color: $color-white;
        margin:0 3rem;
        transform: translateY(-3rem);
        box-shadow: $shadow-three;
        display:flex;
        flex-direction: column;
        border-radius: 2px;

        &-title{
            display:flex;
            flex-direction: column;
            margin-bottom: 1rem;
            text-align: center;
            height: 7rem;
            justify-content: space-between;
            padding:0 1rem;
            margin-top: 3rem;
            @media only screen and (max-width: $bp-M) {
                height: initial;
            }
            &:after{
                align-self: center;
                display: flex;
                content:"";
                height: 2px;
                width: 70%;
                background-color: $color-red;
                margin-top: 1rem;
            }
        }
        &-items{
            font-size: 1.8rem;
            min-height: 25rem;
            padding: 0 3rem 3rem 3rem;
            @media only screen and (max-width: $bp-M) {
                min-height: initial;
            }
            &--item{
                display:flex;
                &:before{
                    display: flex;
                    content:"✓";
                    margin-right: 1.5rem;
                    font-size: 2rem;
                }

            }
            &--diffItem{
                display:flex;
                align-items: center;
                &--svg{
                    margin-right: 1.5rem;
                    transform: translateY(3px);
                }
                & svg {
                    fill: $color-text;
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
    }
}

</style>