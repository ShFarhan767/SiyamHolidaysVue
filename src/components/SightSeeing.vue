<script setup>
import SightCheckBox from './SightCheckBox.vue';
import SightSeeingCard from './SightSeeingCard.vue';
</script>

<template>
    <section class="SightSeeing">
        <div class="SightSeeing_Heading">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-8 Overlay">
                        <div class="Heading_Text">
                            <h2>Our Best Package Tour's</h2>
                            <p>Discover the world & enjoy <br>  your tour with luxury. </p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="SightSeeing_Background">
                <img src="../../assets/img/Travel/Attractive/Attractive-Bg.jpeg" alt="">
            </div>
        </div>


        <SightCheckBox /> 
        <SightSeeingCard /> 

    </section>
</template>

<style scoped>
.SightSeeing{
    padding-top: 3.5rem;
    overflow: hidden;
}
.SightSeeing_Heading{
    width: 100%;
    height: 500px;
    background-color: #bebab7;
}
.SightSeeing_Background img{
    width: 64%;
    height: 505px;
    top: 55px;
    right: 10%;
    position: absolute;
}
.Overlay{
    z-index: 1;
}
.Heading_Text h2{
    color: #fff;
    font-family: 'Fira Sans', sans-serif;
    font-size: 70px;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-top: 15%;
}
.Heading_Text p{
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
    font-size: 18px;
}
@media screen and (max-width: 768px) {
    .SightSeeing_Heading{
        height: auto;
        padding-bottom: 100px;
    }
    .Heading_Text h2 {
        font-size: 35px;
    }

    .Heading_Text p {
        font-size: 14px;
    }

    .SightSeeing_Background img {
        width: 100%;
        height: 295px;
        top: 0;
        right: 0;
    }
}
</style>