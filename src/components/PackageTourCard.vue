<script setup>
const travelPackages = [
  {
    image: "../../assets/img/Travel/Package/Package_Slider-1.webp",
    days: "5 Days Tour",
    price: "$2700/couple",
    title: "Great Ocean Road , Australia",
    location: "Ocean Road , Australia",
    nearbyPlace: "Near Mountain",
    bookingLink: "#"
  },
  {
    image: "../../assets/img/Travel/Package/Package-Slider-2.jpeg",
    days: "3 Days Tour",
    price: "$1140/couple",
    title: "Lesser Sunda Islands",
    location: "Bali , Indonesia",
    nearbyPlace: "West of Lombok",
    bookingLink: "#"
  },
  {
    image: "../../assets/img/Travel/Package/Package_Slider-3.webp",
    days: "7 Days Tour",
    price: "$1890/couple",
    title: "Hakuraa",
    location: "Meemu Atoll , Maldives",
    nearbyPlace: "Dhaalu Atoll",
    bookingLink: "#"
  },
  {
    image: "../../assets/img/Travel/Package/Package-Slider-4.jpeg",
    days: "6 Days Tour",
    price: "$2410/couple",
    title: "Banff",
    location: "Banff , Canada",
    nearbyPlace: "Near Of Ice Mountains",
    bookingLink: "#"
  },
  {
    image: "../../assets/img/Travel/Package/Package-Slider-5.jpeg",
    days: "11 Days Tour",
    price: "$1560/couple",
    title: "Hạ Long Bay",
    location: "Bay , Vietnam",
    nearbyPlace: "Unknown",
    bookingLink: "#"
  },
  {
    image: "../../assets/img/Travel/Package/Package_Slider-6.jpeg",
    days: "7 Days Tour",
    price: "$1890/couple",
    title: "Hakuraa",
    location: "Meemu Atoll , Maldives",
    nearbyPlace: "Dhaalu Atoll",
    bookingLink: "#"
  },
];
</script>

<template>
        <div class="container Package_Card">
            <div class="row">

                <h1>Featured Package</h1>

                <div v-for="(Package, index) in travelPackages" :key="index" class="col-md-4 Cards">

                    <div class="card">
                        <div class="Package-card-img">
                            <img :src="Package.image" alt="">
                        </div>
                        <div class="card-text">
                            <span class="days">{{ Package.days }}</span>
                            <span class="price">{{ Package.price }}</span>

                            <h2>{{ Package.title }}</h2>
                            <p class="location"><span class="fas fa-map"></span>{{ Package.location }}</p>

                            <p class="place"><span class="fas fa-mountain"></span>{{ Package.nearbyPlace }}</p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" :href="Package.bookingLink" target="_blank">Book Now</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
</template>

<style scoped>
.Package_Card {
    margin-top: 100px;
}
.Package_Card h1{
    text-align: center;
    font-family: 'Fira Sans', sans-serif;
    color: #fd9604;
    letter-spacing: 0.5px;
    font-size: 48px;
    padding: 15px;
}
.card {
  width: 320px;
  min-width: 320px;
  height:auto;
  background:#fff;
  position:relative;
  z-index:10;
  margin:25px;
  min-height:356px;
  cursor:pointer;
  transition: all .25s ease;
  border: none;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0, .08);
  border-radius: 0%;
}

.card:hover {
  transform:translate(0, -10px);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
}

.card img {
    width: 100%;
    height: 220px;
    transition: transform 0.3s ease;
}

.card h4 {
  position:absolute;
  left: 0;
  top: 0;
  padding: 15px;
  color: #fd9604;
}

.card i {
  position:absolute;
  right: 0;
  top: 0;
  padding: 15px;
  font-size:1.4rem;
  line-height:3.2rem;
}
.card-text{
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-top: none;
}
.card-text span{
    font-size: 12px; 
    color: #999999;
}
.location{
    font-size: 14px;
    line-height: 1.8;
    font-weight: 400;
    color: #999999;
}
.location .fa-map{
    font-size: 13px;
    color: #999999;
    margin: 0px 5px;
}
.place{
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    color: #999999;
}
.place .fa-mountain{
    font-size: 13px;
    color: #f9ab30;
    margin: 0px 5px;
}
.card .card-text .price {
    position: absolute;
    top: -23px;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    display: inline-block;
    background: #f9ab30;
    color: #fff;
    margin: 0 auto;
    padding: 8px;
    font-size: 16px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    -ms-border-radius: 40px;
    border-radius: 40px;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.card:hover .card-text .price {
    padding-left: 15px;
    padding-right: 15px;
    background: #33313b;
}
/* .card:hover img {
    transform: scale(1.1);
} */
.card .card-text {
    padding: 15px;
}

.card-text h2{
    color: #0b3ba7;
    font-size: 20px;
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 1px;
    margin-top: 10px;
}
p {
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
    color: #676060;
}
.btn{
    margin-top: 20px;
    padding: 10px 25px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    border-radius: 20px;
    background: #0b3ba7;
    color: #fff;
    border: 0px;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,.08);
    transition: all .25s ease;
}
.btn:hover{
    background: transparent;
    border: 1px solid #0b3ba7;
    color: #0b3ba7;
}
@media screen and (max-width: 768px) {
    .Package_Card h1{
        font-size: 38px;
    }
    .card{
        margin: 10px;
    }
    .Cards{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>