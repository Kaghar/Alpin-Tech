<template>
  <nav class="navigation__container" :class="[{navigation__white: scrollPosition > 50}, IEclass]">
    <div class="navigation" >
      <div class="navigation__left">
        
        <nuxt-link to="#header" v-if="scrollPosition > 50"  ><img :alt="navigation.Logo.Alt" class="navigation__logo" :src="navigation.Logo.BlackSrc" /></nuxt-link>
        <nuxt-link to="#header" v-else-if="IElogo == true"  ><img :alt="navigation.Logo.Alt" class="navigation__logo" :src="navigation.Logo.BlackSrc" /></nuxt-link>
        <nuxt-link to="#header" v-else><img  :alt="navigation.Logo.Alt" class="navigation__logo" :src="navigation.Logo.WhiteSrc" /></nuxt-link>
        <ul class="navigation__list">
          <NavMenuItem
            v-for="navItem in navigation.Items"
            :key="navItem.customPath"
            :customPath="navItem.customPath"
            :text="navItem.text"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>


<script >
 export default {
    props:{
      navigation:{
          Items: '',
          Logo: ''
      },
    },
    data(){
      return {
          scrollPosition: null,
          IEclass: '',
          IElogo: false
      }
    },
    async mounted() {
      window.addEventListener('scroll', this.updateScroll);
        const isIE = /* @cc_on!@ */ false || !!document.documentMode
            if (isIE) {
                this.IEclass = 'navigation__white'
                this.IElogo = true
            }
    },
    created(){
      
    },
    methods: {
      updateScroll() {
        const isIE = /* @cc_on!@ */ false || !!document.documentMode
            if (!isIE) {
              this.scrollPosition = window.scrollY
              
            }
      },
    }
   
    
 }
 
</script>

<style scoped lang="scss">
  .navigation{
    display:flex;
    align-items: center;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    z-index: 9990;
    background-color: transparent;
    font-family: "Bold";
    height: 10rem;
    color: $color-white;
    @include mainPadding;
    @media only screen and (max-width: $bp-XS) {
      padding: 0 2rem;
    } 
    &__white{
      box-shadow: $shadow-one;
      & .navigation{
        background-color: $color-white;
          & .navigation__list-item{
              color: $color-nav-text;

          }
      }
    }

    &__container{
       position:fixed;
        top:0;
        left:0;
        width:100%;
        height: 10rem;
        z-index: 9990;

    }
    &__logo{
      height: 8rem;
      transform: translateY(-4px);
      @media only screen and (max-width: $bp-L) {
          transform: translateY(0);
      }
      @media only screen and (max-width: $bp-S) {
        height: 5rem;

      }
    }
    &__list{
      margin-left: 3rem;
      display:flex;
      list-style: none;
    }
    &__left{
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    &__right{
      display:none;
      align-items: center;
    }

  }


</style>
