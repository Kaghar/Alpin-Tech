<template>
   <div class="footer__container" id="contact">
       <div class="footer">
           <div class="footer__top">
                <p class="footer__top-text">{{footer.Phone}}</p>
                <p class="footer__top-text">{{footer.Email}}</p>
           </div>
           <div class="footer__bot">
               <div class="footer__bot-company">"{{footer.CompanyInQoute}}" <span>{{footer.Company}}</span></div>
               <p >{{footer.Address}}</p>
               <p >{{footer.Nip}}</p>
           </div>
       </div>
   </div>
</template>
<script >
export default {
    props: {
        footer: ''
    }
}
 
</script>


<style lang="scss" scoped>

    .footer{
        grid-row: 1;
        grid-column: 3/11;
        display:flex;
        color: $color-white;
        flex-direction: column;
        align-items: center;
        padding: 4rem 0;
        @media only screen and (max-width: $bp-XL) {
            grid-column: 1/13;

        }
        &__container{
            @include mainPadding;
            background-color: $color-darkish;
            display:grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 1fr;
            z-index: 10;
            position: relative;

        }
        &__top{
            display:flex;
            flex-direction: column;
            align-items: center; 
            margin-bottom: 2rem;
            
            &:after{
                height: 2px;
                background-color: $color-red;
                display: flex;
                width: 80%;
                content: '';
            }
            & p {
                font-size: 4rem;
            }
            &-text{
                font-size: 3rem;
                text-decoration: none;
                color: inherit;
                transition: all .2s;
                font-family: "Bold";
                @media only screen and (max-width: $bp-S) {
                    font-size: 2rem;

                }
                @media only screen and (max-width: $bp-XS) {
                    font-size: 2.5rem;

                }
                &:hover{
                    color: $color-red;
                    transition: all .2s;
                }
                
            }
        }
        &__bot{
            display:flex;
            flex-direction: column;
            align-items: center;
            font-size: 2rem;
            &-company{
                @media only screen and (max-width: $bp-S) {
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                }
                & span{
                    @media only screen and (max-width: $bp-S) {
                        display:flex;
                    }
                }
            }
        }
       
    }
</style>