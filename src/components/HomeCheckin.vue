<script setup>
import { ref, onMounted } from 'vue';

const tabs = ref(null);
const allContent = ref(null);
const line = ref(null);

onMounted(() => {
  initTabs();
});

const initTabs = () => {
  tabs.value = document.querySelectorAll('.tab_btn');
  allContent.value = document.querySelectorAll('.content');
  line.value = document.querySelector('.line');

  tabs.value.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabs.value.forEach((t) => t.classList.remove('active'));
      allContent.value.forEach((content) => content.classList.remove('active'));

      tab.classList.add('active');

      const tabIndex = Array.from(tabs.value).indexOf(tab);
      allContent.value[tabIndex].classList.add('active');

      // Update line position to connect with the middle of the clicked button
      const buttonMiddle = e.target.offsetLeft + e.target.offsetWidth / 2;
      line.value.style.width = e.target.offsetWidth + 'px';
      line.value.style.left = buttonMiddle - line.value.offsetWidth / 2 + 'px';
      line.value.style.top = e.target.offsetTop + e.target.offsetHeight + 'px';
    });
  });
};
import 'primevue/resources/themes/lara-light-amber/theme.css';

import Calendar from 'primevue/calendar';

const checkInDate = ref(null);
const checkOutDate = ref(null);

const buttondisplay = ref();
const icondisplay = ref();
const templatedisplay = ref();


import InputText from 'primevue/inputtext';

const value1 = ref(null);
const value3 = ref(null);
const value4 = ref(null);
const value5 = ref(null);


import Dropdown from 'primevue/dropdown';
const selectedItem = ref();
const items = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i}`, value: i })));

const selectedItem2 = ref();
const items2 = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i}`, value: i })));

const selectedItem3 = ref();
const items3 = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i}`, value: i })));
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
                    <button class="tab_btn"><i class="fas fa-bed"></i></button>
                    <button class="tab_btn"><i class="fas fa-fighter-jet"></i></button>
                    <button class="tab_btn"><i class="fa-solid fa-person-walking-luggage"></i></button>
                    <button class="tab_btn"><i class="fa-solid fa-bus"></i></button>
                    <div class="line"></div>
                </div>

                <div class="content_box tm-section tm-bg-img" id="tm-section-1">
                    <div class="content active tm-bg-white ie-container-width-fix-2">
                       <div class="container ie-h-align-center-fix">
                            <div class="row">
                                <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    <form action="index.html" method="get" class="tm-search-form">
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-100">
                                                
                                                <span class="p-input-icon-left">
                                                    <i class="fas fa-map-marker-alt fa-2x tm-form-element-icon"></i>
                                                    <InputText v-model="value1" showIcon iconDisplay="input" placeholder="Destination" />
                                                </span>

                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">
                                                
                                                <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" placeholder="CheckIn Date"/>

                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">

                                                <Calendar v-model="checkOutDate" showIcon iconDisplay="input" inputId="checkOutDateInput" placeholder="CheckOut Date"/>
                                            
                                            </div>
                                        </div>
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-2">

                                                <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Adults" class="w-full md:w-14rem" />

                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">                                            
                                                <Dropdown v-model="selectedItem2" :options="items2" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Children" class="w-full md:w-14rem" />
                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <Dropdown v-model="selectedItem3" :options="items3" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Rooms" class="w-full md:w-14rem" />
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


                    <!-- End Hotel Checkin Box -->

                    <!-- Start Flight Checkin Box -->

                
                    <div class="content tm-bg-white ie-container-width-fix-2">
                       <div class="container ie-h-align-center-fix">
                            <div class="row">
                                <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    <form action="index.html" method="get" class="tm-search-form">
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-100">
                                                
                                                <span class="p-input-icon-left">
                                                    <i class="fas fa-map-marker-alt fa-2x tm-form-element-icon"></i>
                                                    <InputText v-model="value1" showIcon iconDisplay="input" placeholder="Destination" />
                                                </span>

                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">
                                                
                                                <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" placeholder="CheckIn Date"/>

                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">

                                                <Calendar v-model="checkOutDate" showIcon iconDisplay="input" inputId="checkOutDateInput" placeholder="CheckOut Date"/>
                                            
                                            </div>
                                        </div>
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-2">

                                                <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Adults" class="w-full md:w-14rem" />

                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>

                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <Dropdown v-model="selectedItem2" :options="items2" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Children" class="w-full md:w-14rem" />
                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>

                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <Dropdown v-model="selectedItem3" :options="items3" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Rooms" class="w-full md:w-14rem" />
                                                <i class="fa fa-2x fa-bed tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <button type="submit" class="btn btn-primary tm-btn-search">Check Flight</button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>                        
                            </div>
                            
                       </div>
                    </div>

                    <!-- End Flight Checkin Box -->

                    <!-- Start Package Tour Box -->


                    <div class="content tm-bg-white ie-container-width-fix-2">
                       <div class="container ie-h-align-center-fix">
                            <div class="row">
                                <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    <form action="index.html" method="get" class="tm-search-form">
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-100 package-input">

                                                <span class="p-input-icon-left">
                                                    <i class="fas fa-map-marker-alt fa-2x tm-form-element-icon"></i>
                                                    <InputText v-model="value3" showIcon iconDisplay="input" placeholder="Destination" />
                                                </span>

                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50 package-input">
                                                <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" placeholder="Tour Date"/>
                                            </div>
                                            <!-- <div class="form-group tm-form-element tm-form-element-50">
                                                <i class="fas fa-calendar-alt fa-2x tm-form-element-icon"></i>
                                                <input name="check-out" type="date" class="form-control" id="inputCheckOut" placeholder="Check Out">
                                            </div> -->
                                        </div>
                                        <div class="form-row tm-search-form-row">

                                            <div class="form-group tm-form-element tm-form-element-2">

                                                <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Adults" class="w-full md:w-14rem" />

                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">                                            
                                                <Dropdown v-model="selectedItem2" :options="items2" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Children" class="w-full md:w-14rem" />
                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <Dropdown v-model="selectedItem3" :options="items3" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Rooms" class="w-full md:w-14rem" />
                                                <i class="fa fa-2x fa-bed tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <button type="submit" class="btn btn-primary tm-btn-search">Book Now</button>
                                            </div>

                                        </div>
                                        
                                    </form>
                                </div>                        
                            </div>
                            
                       </div>
                    </div>


                    <!-- End Package Tour Box -->


                    <!-- Start Transportation Checking Box -->



                    <div class="content tm-bg-white ie-container-width-fix-2">
                       <div class="container ie-h-align-center-fix">
                            <div class="row">
                                <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    <form method="get" class="tm-search-form">
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-100">
                                                <span class="p-input-icon-left">
                                                    <i class="fas fa-map-marker-alt fa-2x tm-form-element-icon"></i>
                                                    <InputText v-model="value4" showIcon iconDisplay="input" placeholder="Destination" />
                                                </span>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">
                                                <span class="p-input-icon-left">
                                                    <i class="fas fa-map-marker-alt fa-2x tm-form-element-icon"></i>
                                                    <InputText v-model="value5" showIcon iconDisplay="input" placeholder="Destination" />
                                                </span>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-50">
                                                <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" placeholder="Tour Date"/>
                                            </div>
                                        </div>
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-form-element tm-form-element-2">

                                                <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Adults" class="w-full md:w-14rem" />

                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">                                            
                                                <Dropdown v-model="selectedItem2" :options="items2" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Children" class="w-full md:w-14rem" />
                                                <i class="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <Dropdown v-model="selectedItem3" :options="items3" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Rooms" class="w-full md:w-14rem" />
                                                <i class="fa fa-2x fa-bed tm-form-element-icon"></i>
                                            </div>
                                            <div class="form-group tm-form-element tm-form-element-2">
                                                <button type="submit" class="btn btn-primary tm-btn-search">Find Now</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>                        
                            </div>
                            
                       </div>
                    </div>


                    <!-- End Transportation Checking Box -->

                </div>


            </div>
        </div>
    
    </section>

</template>


<style scoped>
@import url('../../assets/css/tooplate-style.css');
@import url('../../assets/css/bootstrap.min.css');
@import url('primevue/resources/themes/lara-light-amber/theme.css');

.checkBox{
    margin: 0;
    padding: 0;
    overflow: hidden !important;
}
.fh5co-cta{
    background-image: url(https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2021/12/slider-2.jpg);
    height: 430px;
    background-repeat: no-repeat;
    background-size: cover;
}
.fh5co-cta .overlay {
    background: rgba(0, 0, 0, 0.4);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    height: auto;
}
.container{
    width: 100%;
    padding: 30px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    z-index: 999;
}
.tab_box{
    width: 135%;
    overflow: hidden !important;
    margin-top: 25px;
    margin-left: -16% !important;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #5d616c !important;
    z-index: -20;
    position: relative; 
}
.button{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -12px;
}
.tab_box{
    font-weight: 600;
    color: #919191;
    background: none;
    border: none;
    padding: 18px;
    cursor: pointer;    
}
.fa-fighter-jet{
    transform: rotateZ(-35deg);
}
.tab_btn{
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    background: #fd9604;
    border: 1px solid #fd9604;
    color: #fff;
    width: 50px;
    height: 50px;
    margin-top: -15px !important;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s all;
    z-index: 999;
}
button:focus {
    outline: none;
    outline: none;
}
.btn-primary{
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: #fd9604;
    color: #fff;
    border: 1px solid #fd9604;
}
.btn-primary:active{
    background: #fd9604 !important;
    color: #fff;
    border: 1px solid #fd9604 !important;
    box-shadow: none !important;
}
.btn-primary:focus{
    background: #fd9604 !important;
    color: #fff;
    border: 1px solid #fd9604 !important;
    box-shadow: none !important;
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
    top: 91px !important;
    z-index: -1;
    height: 2px;
    background-color: #fd9604;
    border-radius: 10px;
    transition: width 0.3s ease, left 0.3s ease, top 0.3s ease;
}
.content_box .content {
    display: none;
}

.content_box .content.active {
    display: block;
}
.content {
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  animation: pulse 1s ease;
}

.content.active {
  opacity: 1;
  transform: translateX(0%); 
}
#tm-section-1 {
    background: transparent !important;
    height: auto;
    margin-top: -100px;
}
.tm-form-element-icon {
    color: #fd9604 !important;
    position: absolute !important;
    top: 10px !important;
    left: 15px !important;
}
.tm-search-form .form-control[data-v-b37b027a] {
    font-size: 0.8rem;
    margin: 0;
    padding: 0.75rem 0.75rem 0.75rem 45px;
}
svg:not(:root).svg-inline--fa {
    overflow: visible;
    color: #fff;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  color: #FFF
}
.p-calendar {
    display: inline-flex;
    max-width: 100%;
    width: 100%;
}
.p-input-icon-left, .p-input-icon-right {
    position: relative;
    width: 100%;
}
.p-input-icon-left > .p-inputtext {
    padding-left: 2.5rem;
    width: 100%;
}
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    width: 100%;
    padding: 0px 28px;
}
.p-dropdown-trigger {
    background: transparent;
    color: #6b7280;
    width: 0rem !important;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
.package-input{
    width:50% !important;
}
.fa-map-marker-alt{
    top: 20px !important;
}
.fa-2x {
    font-size: 1.5em;
}
.p-icon {
    display: inline-block;
    color: #fd9604;
}
.form-control:focus {
    border-color: #fd9604;
    box-shadow: 0 0 0 0.2rem #ffd59a;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
    .fh5co-cta{
        height: auto !important;
    }
    .checkBox{
        margin-top: -25px;
    }
    .fh5co-cta .overlay{
        padding-bottom: 35px;
    }
    #tm-section-1{
        margin-top: 10px;
    }
    .tab_btn{
        width: 40px;
        height: 40px;
        margin-top: -10px !important;
        font-size: 15px;
        padding: 0px;
    }
    .btn-primary{
        font-size: 12px;
    }
    .tab_box{
        margin-left: -10% !important;
        width: 120%;
    }
    .line{
        width: 55px !important;
        height: 2px;
        top: 91px !important;
        left: 35px;
    }
    .package-input{
        width: 100% !important;
    }
}
</style>