<script>
export default {
  mounted() {
    this.setupSlider();
  },
  methods: {
    setupSlider() {
      const cardsContainer = this.$el.querySelector('.card-content');
      const cardWidth = window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
      let currentIndex = 0;

      this.handleScrollNext = () => {
        currentIndex = (currentIndex + 1) % cardsContainer.children.length;
        this.scrollSlider();
      };

      this.handleScrollPrev = () => {
        currentIndex = (currentIndex - 1 + cardsContainer.children.length) % cardsContainer.children.length;
        this.scrollSlider();
      };

      this.scrollSlider = () => {
        const scrollAmount = currentIndex * cardWidth;
        cardsContainer.scrollLeft = scrollAmount;

        if (currentIndex === cardsContainer.children.length - 1) {
          currentIndex = 0;
          cardsContainer.scrollLeft = 0;
        }
      };
    },
  },
};
</script>

<template>
    
    <section class="Attraction">

        <div class="container">
            <h2 class="Title">Attractions & Activities</h2>
            <p class="description">Make easy your journey with us</p>


            <button id="prev" class="btn" @click="handleScrollPrev">
                <i class="las la-angle-left"></i>
            </button>

            <button  id="next" class="btn" @click="handleScrollNext">
                <i class="las la-angle-right"></i>
            </button>

            <div class="slider">

                <div class="card-content">
                    <!-- Card -->
                    <div class="card">
                        <img src="../../assets/img/Travel/Attractive/Slider-1.jpg" alt="destination" />
                        <div class="card__content">
                            <h3>Thailand , Bali Island</h3>
                            <p>
                                Discover off-the-beaten-path locations and hidden gems within
                                dream destinations, taking you beyond the typical tourist spots.
                            </p>
                            <p><i class="fas fa-map-marker-alt"></i> 2 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$173.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                    <!-- Card End -->
                            
                    <!-- Card -->
                    <div class="card">
                        <img src="../../assets/img/Travel/Attractive/Slider-2.jpg" alt="destination" />
                        <div class="card__content">
                            <h3>El Nido’s Beach</h3>
                            <p>
                                Discover off-the-beaten-path locations and hidden gems within
                                dream destinations, taking you beyond the typical tourist spots.
                            </p>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$89.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                     <!-- Card End -->
                            
                    <!-- Card -->
                    <div class="card">
                        <img src="../../assets/img/Travel/Attractive/Slider-3.jpeg" alt="destination" />
                        <div class="card__content">
                            <h3>Ancient Antique</h3>
                            <p>
                                Discover off-the-beaten-path locations and hidden gems within
                                dream destinations, taking you beyond the typical tourist spots.
                            </p>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$127.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                    <!-- Card End -->
                            
                    <!-- Card -->
                    <div class="card">
                        <img src="../../assets/img/Travel/Attractive/Slider-4.jpeg" alt="destination" />
                        <div class="card__content">
                            <h3>Malaysia</h3>
                            <p>
                                Discover off-the-beaten-path locations and hidden gems within
                                dream destinations, taking you beyond the typical tourist spots.
                            </p>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$77.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                    <!-- Card End -->
                            
                    <!-- Card -->
                    <div class="card">
                        <img src="../../assets/img/Travel/Attractive/Slider-5.jpg" alt="destination" />
                        <div class="card__content">
                            <h3>Singapore</h3>
                            <p>
                                Discover off-the-beaten-path locations and hidden gems within
                                dream destinations, taking you beyond the typical tourist spots.
                            </p>
                            <p><i class="fas fa-map-marker-alt"></i> 2 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$181.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                    <!-- Card End -->
                            
                    <!-- Card -->
                    <div class="card">
                        <img src="../../assets/img/Travel/Attractive/slider-6.jpg" alt="destination" />
                        <div class="card__content">
                            <h3>Machu Picchu</h3>
                            <p>
                                Discover off-the-beaten-path locations and hidden gems within
                                dream destinations, taking you beyond the typical tourist spots.
                            </p>
                            <p><i class="far fa-user"></i> 2 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$147.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                    <!-- Card End -->
                        
                </div>
                
            </div>


        </div>

    </section>

</template>

<style scoped>
.Attraction{
    width: 100%;
    padding-top: 0;
    padding-bottom: 3rem;
    background: linear-gradient( to right, rgba(2, 82, 89, 0.9), rgba(255, 255, 255, 0) ), url(../../assets/img/Travel/Attractive/bg.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
}
.Title{
    color: #0b3ba7 !important;
    font-size: 44px;
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 0.5px;
    text-align: start;
    margin-top: 50px;
}
.description{
    font-size: 20px;
    font-family: 'Fira Sans', sans-serif;
    color: #cacaca;
    text-align: start;
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
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: #94a3b8;
}

.CardSlider{
    padding-top: 4.5rem;
    overflow: hidden !important;
}
.card {
  width: 320px;
  min-width: 320px;
  height:100%;
  background-color: #fff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.7);
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
.card-content {
  display:flex;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  overflow:auto;
  padding-top: 100px;
  padding-right: 50px;
  scroll-behavior:smooth;
}
.card-content::-webkit-scrollbar {
   height:0px;
}
.card-content:after {
  content:'';
  display:block;
  min-width:20px;
  height:100px;
  position:relative;
}
.btn{
  min-width:50px;
  margin:auto 10px;
  height:60px;
  border-radius:20px;
  padding: 6px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  background:#0b3ba7;
  color: #fff;
  border:0px;
  outline:none;
  cursor:pointer;
  z-index:9999;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,.08);
  transition: all .25s ease;
}
#prev {
    width: 50px !important;
    height: 50px!important;
    border-radius: 50%;
    margin-top: -185px;
    margin-left: 85%;
    padding: 0;
}
#next {
    width: 50px !important;
    height: 50px!important;
    border-radius: 50%;
    margin-top: -230px;
    margin-left: 91%;
    padding: 0;
}
.btn:hover{
    background:transparent;
    border: 1px solid #fff;
    color: #fff;
    box-shadow: 0px 17px 35px 0px rgba(0,0,0,.07);
}

.btn i {
  font-size:1.2rem;
}

.slider {
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-bottom: 15px;
    overflow: hidden;
    margin-top: -100px;
}
.line{
    position: absolute;
    left: 575px;
    width: 90px;
    height: 5px;
    background-color: #fd9604;
    border-radius: 10px;
}
@media screen and (max-width: 768px) {
    .Package{
        overflow: hidden !important;
    }
    .Title{
        font-size: 25px;
    }
    .description{
        font-size: 12px;
    }
    #prev{
        margin-left: 170px;
        margin-top: 10px;
    }
    #next{
        margin-left: 235px;
        margin-top: -70px;
    }
    .card{
        width: 100% !important;
        margin: 0px 20px;
    }
    .Package-card-img{
        width: 90%;
    }
    .btn{
        margin-right: 25px;
    }
}
</style>