<template>
    <div class="gallery" id="gallery">
        <div class="gallery__top">
            <h2 class="heading-2 gallery__top-title">{{data.Title}}</h2>
            <div class="gallery__top-filters">
                <h4 class="heading-4 gallery__top-filters--filter" 
                v-for="(filter, index) in data.Filters" :key="index" :index="index" 
                :class="{ active: currentFilter === filter.Value }" 
                @click="setFilter(filter.Value)">{{filter.Label}}</h4>
            </div>
        </div>
        <div class="gallery__bot">
            <transition-group class="gallery__bot-gallery" name="galleryBox" >
                <div class="gallery__bot-gallery--item"   v-for="item in filteredArray" :key="item.Img.Alt" @click="openModal(item.Img.Src, item.Img.Alt)">
                    <img class="gallery__bot-gallery--item--img" :src="item.Img.Src" :alt="item.Img.Alt" >
                </div>
            </transition-group>
        </div>
        <div class="gallery__modal" :class="modal.Class" @click="closeModal()">
            <div class="gallery__modal-box">
                <img :src="modal.Src" :alt="modal.Alt" class="gallery__modal-box--img">
            </div>
            <div class="gallery__modal-bg"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:''
    },
    data() {
        return {
            currentFilter: 'all',
            items: [],
            filteredArray:[],
            modal: {
                Class: '',
                Src: '',
                Alt: ''
            }
        }
    },
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
            this.filteredArray=[]
            this.items.forEach(item => { item.Category === filter || filter === 'all' ? this.filteredArray.push(item) : false});
		},
        openModal(img,alt){
            this.modal.Src = img
            this.modal.Alt = alt
            this.modal.Class = 'gallery__modal-shown'

        },
        closeModal(){
            this.modal.Class = ''
        }
	},
    created() {
        this.items = this.data.Items
        this.filteredArray = this.items
    },
}
</script>

<style lang="scss" scoped>
    .gallery{
        @include mainPadding;
        display:flex;
        flex-direction: column;
        
        &__top{
            padding:10rem 0 3rem 0;
            display:flex;
            flex-direction: column;
            &-title{
                align-self: flex-start;
                display:flex;
                flex-direction: column;
                margin-bottom: 2rem;
                &:before{
                    display: flex;
                    content:"";
                    height: 3px;
                    width: 120%;
                    background-color: $color-red;
                    margin-bottom: 2rem;
                }
            }
            &-filters{
                display:flex;
               
                &--filter{
                    font-size: 1.8rem;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;
                    transition: all .2s;

                    &:not(:last-child){
                        margin-right: 2rem;
                    }
                    &:after{
                        display:block;
                        height: 3px;
                        width: 00%;
                        transition:  all .2s;
                        content: '';
                        background-color: $color-red;
                    }
                    @media only screen and (max-width: $bp-M) {
                        font-size: 2.2rem;
                    }   
                }
                & .active{
                    color: $color-red;
                    transition: all .2s;
                    &:after{
                        width: 70%;
                    }
                }
            }
        }
        &__bot{
            display:flex;
            padding-bottom: 10rem;
            transition: all .2s;
            min-height: 60rem;
            &-gallery{
                display:grid;
                grid-template-columns: repeat(6,1fr);
                grid-template-rows: auto;
                column-gap: 4rem;
                row-gap: 2rem;            
                transition: all .2s;
                width: 100%;
                @media only screen and (max-width: $bp-XXL) {
                    grid-template-columns: repeat(5,1fr);
                    grid-template-rows: auto;
                }
                @media only screen and (max-width: $bp-XL) {
                    grid-template-columns: repeat(4,1fr);
                    grid-template-rows: auto;
                    row-gap: 4rem;

                }
                @media only screen and (max-width: $bp-M) {
                    grid-template-columns: repeat(2,1fr);
                    grid-template-rows: auto;
                }
                @include IE {
                    display:flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }
                &--item{
                    transition: all .35s ease-in-out;
                    border-radius:3px;
                    display:flex;
                    height: 20rem;
                    box-shadow: $shadow-three;
                    cursor: pointer;
                    @media only screen and (max-width: $bp-M) {
                        height: 30rem;
                    }
                     @media only screen and (max-width: $bp-S) {
                        height: 20rem;
                    }
                    @include IE {
                        width:20rem;
                        position: relative;
                        overflow: hidden;
                    }
                    &--img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        @include IE {
                            @include IE-object-fit-H;
                        }
                    }
                }
            }
        }
        &__modal{
            position: fixed;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            z-index: 9991;
            display:flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all .2s;
            &-shown{
                opacity: 1;
                visibility: visible;
                transition: all .2s;

            }
            &-box{
                height: 80vh;
                width: auto;
                &--img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }

            &-bg{
                background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
                height: 100%;
                width: 100%;
                position: absolute;
                top:0;
                left:0;
                z-index: -1
            }
        }
    }
    .galleryBox-enter {
        transform: scale(0.5) translatey(-8rem);
        opacity:0;
    }

    .galleryBox-leave-to{
        transform: translatey(3rem);
        opacity:0;
    }

    .galleryBox-leave-active {
        position: absolute;
        z-index:-1;
    }


</style>