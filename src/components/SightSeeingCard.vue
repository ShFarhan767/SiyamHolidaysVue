<script setup>
const destinations = [
  {
    image: "../../assets/img/Travel/Attractive/Card-1.jpg",
    name: "Tribhum Park , Thailand",
    description: "TRIBHUM Three Realms: The Mysterious Three Worlds theme park is located in Phuket, Thailand",
    capacity: 1,
    price: "$90.00",
    ticketLink: "#"
  },
  {
    image: "../../assets/img/Travel/Attractive/Card-2.jpg",
    name: "ESCAPE Penang , Malaysia",
    description: "Park offering a high ropes course, zip lines, slides, a climbing tower & kid-friendly attractions.",
    capacity: 1,
    price: "$36.49",
    ticketLink: "#"
  },
  {
    image: "../../assets/img/Travel/Attractive/Card-3.jpg",
    name: "Waterbom Bali , Indonesia ",
    description: "Come & experience the excitement of the Waterbom Bali Ride Waterslides! Fun for the whole family.",
    capacity: 1,
    price: "$43.59",
    ticketLink: "#"
  },
  {
    image: "../../assets/img/Travel/Attractive/Card-4.jpg",
    name: "Splash Worksi , Canada ",
    description: "Welcome to Splash Works, our 20-acre premier water park where families can splish, splash and laugh!",
    capacity: 1,
    price: "$43.59",
    ticketLink: "#"
  },
  {
    image: "../../assets/img/Travel/Attractive/Card-5.jpg",
    name: "Kings Islandi , USA ",
    description: "Kings Island is a 364-acre park located 24 miles (39 km) northeast of Cincinnati in Mason, Ohio, United States.",
    capacity: 1,
    price: "$29.99",
    ticketLink: "#"
  },
  {
    image: "../../assets/img/Travel/Attractive/Card-6.jpg",
    name: "Skyline Queenstown",
    description: "Attraction featuring a gondola to a panoramic restaurant/bar, hiking trails & a luge ride down.",
    capacity: 1,
    price: "$34.17",
    ticketLink: "#"
  },
];
</script>

<template>
        <div class="container Sightseeing_Card">
            <div class="row">

                <h1>Featured Attraction</h1>

                <div v-for="(destination , index ) in destinations" :key="index" class="col-md-4 Cards">

                    <div class="card">
                        <img :src="destination.image" alt="destination" />
                        <div class="card__content">
                            <h3>{{ destination.name }}</h3>
                            <p>
                                {{ destination.description }}
                            </p>
                            <p><i class="fas fa-map-marker-alt"></i> {{ destination.capacity }} Person</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>{{ destination.price }}</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" :href="destination.ticketLink" target="_blank">Find Ticket</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
</template>

<style scoped>
.Sightseeing_Card {
    margin-top: 100px;
}
.Sightseeing_Card h1{
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
  background-color: #fff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  position:relative;
  z-index:10;
  margin:25px;
  min-height:356px;
  cursor:pointer;
  transition: all .25s ease;
  border: none;
  border-radius: 0%;
}

.card:hover {
  transform:translate(0, -10px);
}
.card__content {
  padding: 1rem;
}

.card__content h3 {
  font-size: 24px;
  color: #0b3ba7;
}

.card__content p {
  margin-bottom: 1rem;
  font-size: .9rem;
  line-height: 1.5rem;
  color: #94a3b8;
}

.card h4 {
  position:absolute;
  left: 0;
  top: 0;
  padding: 15px;
  color: #fd9604;
}

.card i {
  color: #0b3ba7;
}
.fa-user{
  color: #0b3ba7;
}

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
.price{
  margin-top: 5px;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
}
.price span{
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 15px;
  margin-left: 145px;
  font-family: 'Open Sans', sans-serif;
  color: #0b3ba7;
  box-shadow: 0px 17px 35px 0px rgba(0,0,0,.1);
}
.fa-tag{
  color: #0b3ba7;
}
svg:not(:root).svg-inline--fa {
  overflow: visible;
  color: #0b3ba7;
} 
.btn-outline-primary{
  width: 110px;
  padding: 10px;
  height: 36px !important;
  background: transparent !important;
  color: #000 !important;
  border: 1px solid #0b3ba7 !important;
  margin-top: 15px !important;
}
.btn-outline-primary:hover{
  background: #0b3ba7 !important;
  color: #fff !important;
}
.card img {
  width: 100%;
  height: 200px;
}
@media screen and (max-width: 768px) {
  .Sightseeing_Card h1{
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