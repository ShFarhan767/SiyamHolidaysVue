<script setup>

const packages = [
  {
    name: 'Great Ocean Road',
    details: '1 PERSON,  (BY BUS)',
    price: '$70.99',
    image: 'https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: '#',
  },
  {
    name: 'Paris , France',
    details: '1 PERSON,  (BY TRAIN)',
    price: '$81.99',
    image: 'https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: '#',  
  },
  {
    name: 'Bali , Indonesia',
    details: '1 PERSON,  (BY BUS)',
    price: '$90.00',
    image: 'https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: '#',  
  },
  {
    name: 'Meeru Island , Maldive',
    details: '1 PERSON,  (BY SHIP)',
    price: '$110.49',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    name: 'Phuket Island, Thailand',
    details: '2 PERSON,  (BY SHIP)',
    price: '$170.50',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    name: 'Betaab Valley , India',
    details: '1 PERSON,  (BY BUS)',
    price: '$60.59',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Betaab_Valley.jpg/1024px-Betaab_Valley.jpg',
    link: '#',
  },
];
</script>

<template>
    <div class="container Transport_Card">
        <div class="row">

            <h1>Featured Transportation</h1>

            <div v-for="(Package , index) in packages" :key="index" class="col-md-4 Cards">
                <div class="card">
                    <div class="Package-card-img">
                        <img :src="Package.image" alt="">
                    </div>
                    <div class="card-text">
                        <h2>{{ Package.name }}</h2>
                        <p><i class="fas fa-map-marker-alt"></i> {{ Package.details }}</p>
                        <p class="price"><i class="fas fa-tag"></i> Price <span>{{ Package.price }}</span></p>
                        <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" :href="Package.link" target="_blank">Find Ticket</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.Transport_Card{
    margin-top: 50px;
}
.Transport_Card h1{
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
  border-radius:30px;
  position:relative;
  z-index:10;
  margin:25px;
  min-height:356px;
  cursor:pointer;
  transition: all .25s ease;
  border: none;
  box-shadow: 0px 17px 35px 0px rgba(0,0,0,.07);
}

.card:hover {
  transform:translate(0, -10px);
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
.fa-map-marker-alt{
    color: #0b3ba7;
}

.card .card-text {
    padding: 15px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
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
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 200px;
}
@media only screen and (max-width: 768px) {
  .Transport_Card{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Transport_Card h1{
    font-size: 28px;
  }
  .Cards{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>