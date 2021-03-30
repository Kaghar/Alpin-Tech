<template>
    <header class="hero" :class="showHero" id="header">
        <Hooper v-if="header.Slides.length > 1" :settings="header.Settings" @updated="updateHero">
            <Slide v-for="(slide, index) in header.Slides" :key="index" :index="index">
              <div class="heroSlide" :style="backgroundImage(slide.Image.Src)">
                <div class="heroSlide__box">
                  <h1 class="heading-1 heroSlide__box-title">{{slide.Text}}</h1>
                </div>
              </div>
            </Slide>
            <HooperDots slot="hooper-addons" id="about"></HooperDots>
        </Hooper>
        <div v-else class="heroSlide" :style="backgroundImage(slide.Image.Src)" v-for="(slide, index) in header.Slides" :key="index" :index="index">
          <div class="heroSlide__box">
            <h1 class="heading-1 heroSlide__box-title">{{slide.Text}}</h1>
          </div>
        </div>
    </header>
</template>

<script >
  export default {
    props: {
        header: {
            Slides: [],
            Settings: ''
        },
    },
    data() {
      return {
        showHero:''
      }
    },
    methods: {
      backgroundImage(src){
        return `backgroundImage: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${src}')`
      },
      updateHero() {
            this.showHero = 'hero__show'
      },
    },
      
  }
</script>

<style lang="scss" scoped>

  .hero{
      width: 100%;
      height: 80vh;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      opacity: 0;
      transition: all 0.2s;
      @media only screen and (max-width: $bp-L) {
        height: calc(50vh + 10rem);

      }
      @media only screen and (max-width: $bp-M) {
        height:  calc(40vh + 10rem);
      }
      &__show {
        opacity: 1;
        transition: all 0.2s;
      }
      & .hooper{
        height: 100%;
        & .hooper-slide{
          display:flex;
          justify-content: center;
          align-items: center;
        }
      }
       
  }

  .heroSlide{
    background-size: cover;
    background-position: top;
    height: 100%;
    width: 100%;
    display:grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: 100%;
    @include mainPadding;
      &__box{
        align-self: center;
        display:flex;
        flex-direction: column;
        grid-row: 1;
        grid-column: 4/10;
        margin-top: 10rem;
        @media only screen and (max-width: $bp-L) {
          grid-row: 1;
          grid-column: 2/12;
        }
          @media only screen and (max-width: $bp-M) {
          grid-row: 1;
          grid-column: 1/13;
        }
        &-title{
          margin-bottom: 2rem;
          text-align: left;
          -moz-user-select: none;
          user-select: none;
        }
      }
  }


</style>