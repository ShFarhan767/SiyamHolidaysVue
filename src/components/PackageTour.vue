<script setup>
import PackageCheckBox from './PackageCheckBox.vue';
import PackageTourCard from './PackageTourCard.vue'
</script>

<template>
    <section class="Package_Tour">
        <div class="Package_Heading">
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

            <div class="Package_Background">
                <img src="../../assets/img/Travel/Package/Package-Bg.jpeg" alt="">
            </div>
        </div>

        <PackageCheckBox />

        <PackageTourCard />

    </section>
</template>

<style scoped>
.Package_Tour{
    padding-top: 3.5rem;
    overflow: hidden;
}
.Package_Heading{
    width: 100%;
    height: 500px;
    background-color: #1b3335;
}
.Package_Background img{
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
</style>