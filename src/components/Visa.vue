<script setup>
import VisaType from './VisaType.vue';
import VisaTypesEligibility from './VisaTypesEligibility.vue';
import VisaCountryTabVue from './VisaCountryTab.vue';
</script>

<template>
    <section class="Visa">
        <div class="Visa_Heading">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-8 Overlay">
                        <div class="Heading_Text">
                            <h2>Find & make Visa easily with us</h2>
                            <p>Discover the world & enjoy <br>  your tour with luxury. </p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="Visa_Background">
                <img src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=1300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            </div>
        </div>

        <VisaType />
        <VisaTypesEligibility />
        <VisaCountryTabVue />

    </section>
</template>

<style scoped>
.Visa{
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    overflow: hidden;
}
.Visa_Heading{
    width: 100%;
    height: 500px;
    background-color: #182035;
}
.Visa_Background img{
    width: 64%;
    height: 500px;
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
    .Visa_Heading{
        height: 310px;
        padding-bottom: 115px;
    }
    .Heading_Text h2 {
        font-size: 35px;
    }

    .Heading_Text p {
        font-size: 14px;
    }

    .Visa_Background img {
        width: 100%;
        height: 310px;
        right: 0;
    }
}
</style>