<template>
    <div class="btnArrow" :class="checkColor(color)">
        <svg xmlns="http://www.w3.org/2000/svg" width="12.828" height="7.828" viewBox="0 0 12.828 7.828">
            <path class="a" d="M0,0,5,5,0,10" transform="translate(11.414 1.414) rotate(90)"/>
        </svg>
    </div>
</template>
<script>
export default {
    props:{
        color:''
    },
    methods: {
        checkColor(value){
            return `btnArrow__${value}`
        }
    },
}
</script>
<style lang="scss" scoped>
    .btnArrow{
        background-color: $color-red;
        display:flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 3rem;
        box-shadow: $shadow-two;

        &__purple{
            background-color: $color-purple;

        }
        & svg{
            pointer-events: none;
            height: 1.5rem;
            width: 1.5rem;
            transform: rotate(-90deg);
        }
        .a {
            fill:none;
            stroke:$color-white;
            stroke-linecap:round;
            stroke-miterlimit:10;
            stroke-width:2px;
            opacity:1;
        
        }
    }
</style>