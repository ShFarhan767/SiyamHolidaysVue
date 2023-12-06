<script>
export default {
    data() {
      return {
        tabs: null,
        allContent: null,
        line: null
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.initTabs();
      });
    },
    methods: {
      initTabs() {
        this.tabs = document.querySelectorAll('.tab_btn');
        this.allContent = document.querySelectorAll('.content');
        this.line = document.querySelector('.line');
  
        this.tabs.forEach((tab, index) => {
          tab.addEventListener('click', (e) => {
            this.tabs.forEach(t => t.classList.remove('active'));
            this.allContent.forEach(content => content.classList.remove('active'));
  
            tab.classList.add('active');
  
            const tabIndex = Array.from(this.tabs).indexOf(tab);
            this.allContent[tabIndex].classList.add('active');
  
            // Update line position to connect with the clicked button
            this.line.style.width = e.target.offsetWidth + "px";
            this.line.style.left = e.target.offsetLeft + 10 + "px";
            this.line.style.top = e.target.offsetTop + e.target.offsetHeight + "px";
          });
        });
      }
    }
};

</script>

<template>
    
    <section class="checkBox">

        <div class="fh5co-cta">
            <div class="overlay"></div>

            <div class="container">

                <div class="tab_box">
                    <!-- <p class="bg-line"></p> -->
                    
                </div>

                <div class="button">
                    <button class="tab_btn"><i class="fas fa-bed"></i><span>Hotel</span></button>
                    <button class="tab_btn"><i class="fas fa-plane"></i><span>Flight</span></button>
                    <button class="tab_btn"><i class="fas fa-tree"></i><span>Guide</span></button>
                    <button class="tab_btn"><i class="fas fa-campground"></i><span>Activites</span></button>
                    <div class="line"></div>
                </div>

                <div class="content_box tm-section tm-bg-img" id="tm-section-1">
                    <div class="content active tm-bg-white ie-container-width-fix-2">
                       <div class="container ie-h-align-center-fix">
                            <div class="row">
                                <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    <form action="index.html" method="get" class="tm-search-form tm-section-pad-2">
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-100">
                                                <i class="fas fa-map-marker-alt fa-2x tm-form-element-icon"></i>
                                                <input name="city" type="text" class="form-control" id="inputCity" placeholder="Type your destination...">
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">
                                                <i class="fas fa-calendar-alt fa-2x tm-form-element-icon"></i>
                                                <input name="check-in" type="date" class="form-control" id="inputCheckIn" placeholder="Check In">
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">
                                                <i class="fas fa-calendar-alt fa-2x tm-form-element-icon"></i>
                                                <input name="check-out" type="date" class="form-control" id="inputCheckOut" placeholder="Check Out">
                                            </div>
                                        </div>
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-2">                                            
                                                <select name="adult" class="form-control tm-select" id="adult">
                                                    <option value="">Adult</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">                                            
                                                <select name="children" class="form-control tm-select" id="children">
                                                    <option value="">Children</option>
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <select name="room" class="form-control tm-select" id="room">
                                                    <option value="">Room</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                <i class="fa fa-2x fa-bed tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <button type="submit" class="btn btn-primary tm-btn-search">Check Availability</button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>                        
                            </div>
                            
                       </div>
                    </div>

                </div>
            </div>
        </div>
    
    </section>

</template>


<style scoped>
@import url('../../assets/css/tooplate-style.css');
.checkBox{
    margin: 0;
    padding: 0;
    overflow: hidden !important;
}
.fh5co-cta{
    background-image: url(https://images.pexels.com/photos/6130045/pexels-photo-6130045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    height: 620px;
    background-repeat: no-repeat;
    background-size: cover;
}
.fh5co-cta .overlay {
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    height: 620px;
}
.container{
    width: 100%;
    padding: 30px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    z-index: 999;
}
.tab_box{
    width: 117%;
    overflow: hidden !important;
    margin-top: 100px;
    margin-left: -94px !important;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgb(252, 252, 252) !important;
    z-index: -20;
    position: relative;
}
.button{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -45px;
}
.tab_box{
    font-weight: 600;
    color: #919191;
    background: none;
    border: none;
    padding: 18px;
    cursor: pointer;    
}
.tab_btn span{
    margin-left: 10px;  
}
.tab_btn{
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    background: none;
    border: 1px solid #fd9604;
    color: #fd9604;
    width: 120px;
    height: 40px;
    margin-top: -15px !important;
    padding: 5px;
    border-radius: 30px;
    cursor: pointer; 
    transition: 0.5s all;
}
.tab_btn:hover{
    background: #fd9604;
    color: #fff;
}
.tab_box .tab_btn.active{
    color: #fd9604;
}
.btn-primary{
    background: #fd9604;
    color: #fff;
    border: 1px solid #fd9604;
}
.btn-primary:hover{
    background: none;
    border: 1px solid #fd9604;
    color: #fd9604;
}
.line{
    position: absolute;
    width: 88px !important;
    left: 122px ;
    top: 165px !important;
    z-index: -1;
    height: 5px;
    background-color: #fd9604;
    border-radius: 10px;
    transition: width 0.3s ease, left 0.3s ease, top 0.3s ease;
}
#tm-section-1[data-v-b37b027a] {
    background: transparent !important;
    height: auto;
    margin-top: -40px;
}
.tm-form-element-icon {
    color: #fd9604;
    position: absolute !important;
    top: 10px !important;
    left: 15px !important;
}
.fa-2x {
    font-size: 1.5em;
}
.form-control:focus {
    border-color: #fd9604;
    box-shadow: 0 0 0 0.2rem #ffd59a;
}
@media screen and (max-width: 768px) {
    .fa-bed , .fa-plane ,
    .fa-tree , .fa-campground{
        width: 35px;
        height: 35px;
        margin-top: 6px;
    }
    .line{
        width: 55px !important;
        height: 3px;
        left: 25px !important;
    }
}
</style>