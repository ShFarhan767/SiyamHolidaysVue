<script setup>
import HomeSlider from './HomeSlider.vue';
import HomeCheckin from './HomeCheckin.vue';
import HomeOffer from './HomeOffer.vue';
import HomeCard from './HomeHotelCard.vue';
import HomePackage from './HomePackage.vue';
import HomeFlight from './HomeFlight.vue';
import HomeTransport from './HomeTransport.vue';
import HomeAttraction from './HomeAttraction.vue';

</script>

<template>
        <main class="main" id="top">
            <HomeSlider />
            <HomeOffer />
            <HomeCheckin />
            <HomeCard />
            <HomeFlight />


            <HomePackage />
            <HomeTransport />
            <HomeAttraction />
        </main>
</template>