<script setup>
import InputText from 'primevue/inputtext';

import Calendar from 'primevue/calendar';

</script>

<template>
    <section class="Hotel">
        <div class="Hotel_Heading">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-8 Overlay">
                        <div class="Heading_Text">
                            <h2>World Class Accommodation </h2>
                            <p>Discover a hotel that defines <br>  a new dimension of luxury. </p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="Hotel_Background">
                <img src="../../assets/img/Travel/Hotel/h1_hero1.png.webp" alt="">
            </div>
        </div>

        <div class="container Hotel_Box">
            <div class="row">
                <div class="col-md-7 First-Section">
                    <h4>1. Destination/Hotel Name</h4>

                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="value1" placeholder="City & Hotel" />
                    </span>

                    <h4>2. Duration of Stay</h4>

                    <div class="col-md-12">
                        <div class="col-md-4">
                            <label for="birth_date">CheckIn Date</label>
                            <Calendar v-model="checkOutDate" showIcon iconDisplay="input" inputId="checkOutDateInput" placeholder="CheckOut Date"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.Hotel{
    padding-top: 3.5rem;
    overflow: hidden;
}
.Hotel_Heading{
    width: 100%;
    height: 500px;
    background-color: #391F14;
}
.Hotel_Background img{
    width: 64%;
    height: 505px;
    top: 6%;
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
.Hotel_Box{
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    background: #fd9604;
}
.First-Section{
    background: #fff;
    margin: 25px;
    padding: 5px 30px;
}
.First-Section h4{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    letter-spacing: 0.5px;
    margin-top: 30px;
}
.p-input-icon-left, .p-input-icon-right {
    position: relative;
    width: 100%;
}
input{
    width: 100%;
}
</style>