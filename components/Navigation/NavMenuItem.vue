<template>
    <li class="navigation__list-item" @click="scroll(customPath)">
        <p>{{text}}</p>
    </li>
</template>

<script>
export default {
    props:{
        customPath:{
            type: String,
            required: true,

        },
        text:{
            type: String,
            required: true
        },
    },
    methods: {
        scroll(id) { 
            document.getElementById(id).scrollIntoView({
            behavior: "smooth"
            });
        }
    },
}
</script>

<style  scoped lang="scss">
    .navigation__list-item{
        color: $color-white;
        margin: 0 1rem;
        font-size: 2rem;
        position: relative;
        transition:  all .2s;
        &:hover{
          & .subMenu{
              opacity: 1;
              visibility: visible;
              pointer-events: all;
              transition:  all .2s;
            }
        }
        & p {
            color: inherit;
            text-decoration: none;
            display:flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            &:hover,
            &:active{
                color: $color-red;
            }
            &:hover{
                
                &:after{
                    width: 70%;
                    transition: all .2s;
                }
            }
            &:after{
                display:block;
                height: 3px;
                width: 0%;
                transition:  all .2s;
                content: '';
                background-color: $color-red;
            }
        }
        // & .nuxt-link-active {
        //     color: $color-red;
        //     &:after{
        //         display:block;
        //         height: 3px;
        //         width: 70%;
        //         transition:  all .2s;
        //         content: '';
        //         background-color: $color-red;
        //     }
        // }
       
    }
</style>