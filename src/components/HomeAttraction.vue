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
                        <div class="Package-card-img">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipOREocY3TG8AAA26cDWOc-8_K8O-i962LPaSAwE=s680-w680-h510" alt="">
                        </div>
                        <div class="card-text">
                            <h2>ESCAPE Penang</h2>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$34.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                    <!-- Card End -->
                            
                    <!-- Card -->
                    <div class="card">
                    
                        <div class="Package-card-img">
                            <img src="https://lh5.googleusercontent.com/p/AF1QipPKnoA6-CJazVdFeT9v3hxJTpjKZca0RYEqCKdS=w204-h114-n-k-no" alt="">
                        </div>
                        <div class="card-text">
                            <h2>Singapore Flyer</h2>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$29.49</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                        <!-- Card End -->
                            
                        <!-- Card -->
                    <div class="card">
                        
                        <div class="Package-card-img">
                            <img src="https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=400" alt="">
                        </div>
                        <div class="card-text">
                            <h2>Disneyland Paris</h2>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$74.00</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                        <!-- Card End -->
                            
                        <!-- Card -->
                    <div class="card">
                        
                        <div class="Package-card-img">
                            <img src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </div>
                        <div class="card-text">
                            <h2>Great Ocean Road</h2>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON,  (BY BUS)</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$17.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                        <!-- Card End -->
                            
                        <!-- Card -->
                    <div class="card">
                        
                        <div class="Package-card-img">
                            <img src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">

                        </div>
                        <div class="card-text">
                            <h2>Great Ocean Road</h2>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON,  (BY BUS)</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$17.99</span></p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Find Ticket</a>
                        </div>
                    </div>
                        <!-- Card End -->
                            
                        <!-- Card -->
                    <div class="card">
                        
                        <div class="Package-card-img">
                            <img src="https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">

                        </div>
                        <div class="card-text">
                            <h2>A Tropical Haven.</h2>
                            <p><i class="fas fa-map-marker-alt"></i> 1 PERSON,  (BY BUS)</p>
                            <p class="price"><i class="fas fa-tag"></i> Price <span>$17.99</span></p>
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
}
.Title{
    color: #0b3ba7 !important;
    font-size: 40px;
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 0.5px;
    text-align: start;
}
.description{
    font-size: 20px;
    font-family: 'Fira Sans', sans-serif;
    color: #cacaca;
    text-align: start;
}
.CardSlider{
    padding-top: 4.5rem;
    overflow: hidden !important;
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
  box-shadow: 0px 0px 0px 0px rgba(0,0,0, .08);
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
  position:absolute;
  right: 0;
  top: 0;
  padding: 15px;
  font-size:1.4rem;
  line-height:3.2rem;
}
.fa-map-marker-alt{
    color: #fd9604;
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
    color: #fd9604;
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
    border-radius: 30px;
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
    width: 40px !important;
    height: 45px!important;
    border-radius: 50%;
    margin-top: -185px;
    margin-left: 85%;
    padding: 0;
}
#next {
    width: 40px !important;
    height: 45px!important;
    border-radius: 50%;
    margin-top: -230px;
    margin-left: 91%;
    padding: 0;
}
.btn:hover{
    background:transparent;
    border: 1px solid #0b3ba7;
    color: #0b3ba7;
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
        margin: 0;
    }
    .Package-card-img{
        width: 90%;
    }
    .btn{
        margin-right: 25px;
    }
}
</style>