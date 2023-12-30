<script setup>
import TransportationCheckbox from './TransportationCheckbox.vue';
import TransportationCardVue from './TransportationCard.vue';
</script>

<template>
    <section class="Transportation">
        <div class="Transportation_Heading">
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

            <div class="Transportation_Background">
                <img src="../../assets/img/Travel/Transportation/Transportation-Bg.jpeg" alt="">
            </div>
        </div>

        <TransportationCheckbox />
        <TransportationCardVue />

    </section>
</template>

<style scoped>
.Transportation{
    padding-top: 3.5rem;
    overflow: hidden;
}
.Transportation_Heading{
    width: 100%;
    height: 500px;
    background-color: #543d2d;
}
.Transportation_Background img{
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
    .Transportation_Heading{
        height: auto;
        padding-bottom: 110px;
        margin-top: 10px !important;
    }
    .Heading_Text h2 {
        font-size: 35px;
    }

    .Heading_Text p {
        font-size: 14px;
    }

    .Transportation_Background img {
        width: 100%;
        height: auto;
        top: 60px;
        right: 0;
    }
}
</style>