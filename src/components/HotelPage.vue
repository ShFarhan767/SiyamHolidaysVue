<script setup>
import HotelCheckBox from './HotelCheckBox.vue';
//-- Hotel Card --//
const cardItems = [
  {
    rating: 4.8,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Aksari Resort',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.9,
    image: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Jumeirah Al Qasr',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.6,
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg',
    title: 'Hotel Casa Turquesa',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.5,
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Soneva Fushi',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.5,
    image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'La Réserve Paris',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.5,
    image: 'https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Marina Bay Sands',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
];
//-- Hotel Card --//
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

        <HotelCheckBox />


        <div class="container Hotel_Card">
            <div class="row">

                <h1>Featured Hotels</h1>

                <div v-for="(items , index) in cardItems" :key="index" class="col-md-4">

                    <div class="card">
                        <h4>{{ items.rating }}</h4>
                        <i class="lar la-heart"></i>
                        <div class="card-img">
                            <img :src="items.image" alt="">
                        </div>
                        <div class="card-text">
                            <h2>{{ items.title }}</h2>
                            <p>{{ items.description }}</p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" :href="items.link" target="_blank">Book Now</a>
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
.Hotel_Heading {
    width: 100%;
    height: 500px;
    background-color: #391F14;
    position: relative;
}

.Hotel_Background img {
    width: 64%;
    height: 505px;
    top: 0px;
    right: 10%;
    position: absolute;
}

.Overlay {
    z-index: 1;
}

.Heading_Text h2 {
    color: #fff;
    font-family: 'Fira Sans', sans-serif;
    font-size: 70px;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-top: 15%;
}

.Heading_Text p {
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
    font-size: 18px;
}

/* Hotel_Card */
.Hotel_Card{
    margin-top: 100px;
}
.Hotel_Card h1{
    text-align: center;
    font-family: 'Fira Sans', sans-serif;
    color: #fd9604;
    letter-spacing: 0.5px;
    font-size: 48px;
    padding: 15px;
}

.card {
  width: 300px;
  min-width: 300px;
  height:auto;
  background:#fff;
  border-radius:30px;
  position:relative;
  z-index:10;
  margin:25px;
  min-height:356px;
  cursor:pointer;
  transition: all .25s ease;
  border: none;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0, .08);
}

.card:hover {
  transform:translate(0, -10px);
  box-shadow: 0px 17px 35px 0px rgba(0,0,0,.07);
}
.card:hover i{
  color: #fd9604;
}
.card img {
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 200px;

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
  transition: 0.6s all;
}

.card .card-text {
    box-shadow: 0px 17px 35px 0px rgba(0,0,0,.07);
    padding: 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}

.card-text h2{
    color: #0b3ba7;
    font-size: 24px;
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 1px;
}
.card p {
    font-size: 14px;
    line-height: 1.8;
    opacity: .6;
    margin-top: 10px;
    color: #2A3855;
}
/* Hotel_Card */
@media screen and (max-width: 768px) {
    .Hotel_Heading{
        height: auto;
        padding-bottom: 115px;
    }
    .card{
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Heading_Text h2 {
        font-size: 35px;
    }

    .Heading_Text p {
        font-size: 14px;
    }

    .Hotel_Background img {
        width: 100%;
        height: auto;
        top: 0;
        right: 0;
    }
    .Hotel_Box h3 , .First-Section h4 , .Second-Section h4{
        font-size: 18px !important;
    }
    .First-Section p{
        margin-top: 15px;
    }
    .p-dropdown {
        margin-top: 15px;
    }
    .Hotel_Card h1{
        font-size: 38px;
    }
    
}
</style>

