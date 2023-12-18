<script setup>
import { ref , computed } from 'vue';
import InputText from 'primevue/inputtext';

import Calendar from 'primevue/calendar';
const checkInDate = ref(null);
const checkOutDate = ref(null);

const currentDatePlaceholder = computed(() => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // Month is zero-based
  const year = today.getFullYear();

  return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
});

import Dropdown from 'primevue/dropdown';
const selectedItemHotel = ref();
const items = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} Days`, value: i + 1 })));

const adultsItemHotel = ref();
const adultsItems = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} Adults`, value: i + 1 })));

const childrenItemHotel = ref();
const childrenItems = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} Childrens`, value: i + 1 })));

const roomItemHotel = ref();
const roomItems = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} Rooms`, value: i + 1 })));

//-- Hotel Card --//
const cardItems = [
  {
    rating: 4.8,
    image: '../../assets/img/Travel/Hotel/Card-1.jpeg',
    title: 'Aksari Resort',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.9,
    image: '../../assets/img/Travel/Hotel/Card-2.jpeg',
    title: 'Jumeirah Al Qasr',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.6,
    image: '../../assets/img/Travel/Hotel/Card-3.jpeg',
    title: 'Hotel Casa Turquesa',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.5,
    image: '../../assets/img/Travel/Hotel/Card-4.jpeg',
    title: 'Soneva Fushi',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.5,
    image: '../../assets/img/Travel/Hotel/Card-5.jpeg',
    title: 'La Réserve Paris',
    description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    link: '#'
  },
  {
    rating: 4.5,
    image: '../../assets/img/Travel/Hotel/Card-6.jpeg',
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

        <div class="container Hotel_Box">
            <h3>Search and book your hotels in 3 easy steps here!</h3>
            <div class="row">
                <div class="col-md-7 First-Section">
                    <h4>1. Destination/Hotel Name</h4>

                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="value1" placeholder="City & Hotel" />
                    </span>

                    <h4>2. Duration of Stay</h4>

                    <div class="row Date-Section">

                        <div class="col-md-4">
                            <p>Check-In :</p>
                            <Calendar v-model="checkInDate" showIcon iconDisplay="input" inputId="checkOutDateInput" :placeholder="currentDatePlaceholder" />
                        </div>

                        <div class="col-md-4">
                            <p>Duration :</p>

                            <Dropdown v-model="selectedItemHotel" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Days" class="w-full md:w-14rem" />

                        </div>

                        <div class="col-md-4">
                            <p>Check-Out :</p>
                            <Calendar v-model="checkOutDate" showIcon iconDisplay="input" inputId="checkOutDateInput" placeholder="CheckOut Date"/>
                        </div>

                    </div>
                </div>

                <div class="col-md-5 Second-Section">
                    <h4>3. Search Hotels</h4>

                    <div class="row">

                        <div class="col-md-6">
                            <Dropdown v-model="adultsItemHotel" :options="adultsItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Adults" class="w-full md:w-14rem" />
                        </div>

                        <div class="col-md-6">
                            <Dropdown v-model="childrenItemHotel" :options="childrenItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Children" class="w-full md:w-14rem" />
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <h4>Serach Room</h4>
                            <div class="col-md-12">
                                <p>Rooms</p>
                            <Dropdown v-model="roomItemHotel" :options="roomItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Rooms" class="w-full md:w-14rem" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

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
.Hotel_Heading{
    width: 100%;
    height: 500px;
    background-color: #391F14;
}
.Hotel_Background img{
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
.Hotel_Box{
    width: 100%;
    height: auto;
    padding: 40px 50px;
    background: #fd9604;
    margin-top: -70px;
}
.Hotel_Box h3{
    font-size: 28px;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
    text-align: center;
    padding-bottom: 10px;
    letter-spacing: 0.5px;
}
.First-Section{
    background: #fff;
    border-right: 1px solid #dddbdb;
}
.Date-Section{
    padding-bottom: 25px;
}
.Second-Section{
    background: #fff;
}
.First-Section h4{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    letter-spacing: 0.5px;
    margin-top: 30px;
}
.First-Section p , .Second-Section p{
    color: #2A3855;
}
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    width: 100%;
}
.p-dropdown-trigger {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px; /* Adjust the right offset as needed */
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-top: 5px solid #000; /* Adjust the color as needed */
}
.p-input-icon-left, .p-input-icon-right {
    position: relative;
    width: 100%;
}
input{
    width: 100%;
}
.Second-Section h4{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    letter-spacing: 0.5px;
    margin-top: 30px;
}
.rooms{
    margin-top: 30px;
    color: #2A3855;
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
</style>