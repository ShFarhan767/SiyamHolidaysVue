<script setup>
import FlightCheckBox from './FlightCheckBox.vue';
import FlightCard from './FlightCard.vue';
</script>

<template>
    <section class="Flight">
        <div class="Flight_Heading">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-8 Overlay">
                        <div class="Heading_Text">
                            <h2>Find the best airline tickets deals</h2>
                            <p>Discover the world & enjoy <br>  your tour with luxury. </p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="Flight_Background">
                <img src="../../assets/img/Travel/Flight/Flight-Bg.jpeg" alt="">
            </div>
        </div>


        <FlightCheckBox />
        <FlightCard />

    </section>
</template>

<style scoped>
.Flight{
    padding-top: 3.5rem;
    overflow: hidden;
}
.Flight_Heading{
    width: 100%;
    height: 500px;
    background-color: #365478;
}
.Flight_Background img{
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
    .Flight_Heading{
        height: auto;
        padding-bottom: 115px;
    }
    .Heading_Text h2 {
        font-size: 35px;
    }

    .Heading_Text p {
        font-size: 14px;
    }

    .Flight_Background img {
        width: 100%;
        height: 310px;
        top: 60px;
        right: 0;
    }
}
</style>