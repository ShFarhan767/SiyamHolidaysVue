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
    
    <section class="Package">

        <div class="container">
            <h2 class="Title">Package Tour</h2>
            <p class="description">Get ready for starting tour</p>

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
                            <img src="https://images.pexels.com/photos/6465339/pexels-photo-6465339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </div>
                        <div class="card-text">
                            <h2>Great Ocean Road</h2>
                            <p><i class="fas fa-map-marker-alt"></i> Australia</p>
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Book Now</a>
                        </div>
                    </div>
                    <!-- Card End -->
                            
                    <!-- Card -->
                    <div class="card">
                       
                        <div class="Package-card-img">
                            <img src="https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </div>
                        <div class="card-text">
                            <h2>Great Ocean Road</h2>
                            <p><i class="fas fa-map-marker-alt"></i> Australia</p>
                            
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Book Now</a>
                        </div>
                    </div>
                        <!-- Card End -->
                            
                        <!-- Card -->
                    <div class="card">
                        
                        <div class="Package-card-img">
                            <img src="https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </div>
                        <div class="card-text">
                            <h2>Great Ocean Road</h2>
                            <p><i class="fas fa-map-marker-alt"></i> Australia</p>
                            
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Book Now</a>
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
                            <p><i class="fas fa-map-marker-alt"></i> Australia</p>
                            
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Book Now</a>
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
                            <p><i class="fas fa-map-marker-alt"></i> Australia</p>
                            
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Book Now</a>
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
                            <p><i class="fas fa-map-marker-alt"></i> Maldives</p>
                            
                            <a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="#" target="_blank">Book Now</a>
                        </div>
                    </div>
                    <!-- Card End -->
                        
                </div>
                
            </div>

        </div>

    </section>

</template>

<style  scoped>
.Package{
    padding-top: 0;
}
.Title{
    color: #0b3ba7 !important;
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 1px;
    text-align: start;
}
.description{
    font-size: 20px;
    font-family: 'Fira Sans', sans-serif;
    color: #cacaca;
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
  padding: 6px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius:20px;
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
    margin-top: -195px;
    margin-left: 85%;
    padding: 0;
}
#next {
    width: 40px !important;
    height: 45px!important;
    border-radius: 50%;
    margin-top: -240px;
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