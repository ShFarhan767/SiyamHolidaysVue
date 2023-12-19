<script setup>
import { ref, onMounted , computed } from 'vue';

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

import InputText from 'primevue/inputtext';

const value = ref(null); 

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
const selectedItemTime = ref();
const items = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} `, value: i + 1 })));

const adultsItemHotel = ref();
const adultsItems = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} Adults`, value: i + 1 })));

const childrenItemHotel = ref();
const childrenItems = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} Childrens`, value: i + 1 })));

const arrivalItemSelect = ref();
const arrivalItems = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} `, value: i + 1 })));

</script>

<template>
    <div class="container Transport_Box">
        <h3>Search and book your transportation in 4 easy steps here!</h3>
        <div class="row">
            <div class="col-md-12 Tab-Section">
                
                <div class="col-md-3 Button">
                    <button class="tab_btn active">Step 1</button>
                </div>
                <div class="col-md-3 Button">
                    <button class="tab_btn">Step 2</button>
                </div>
                <div class="col-md-3 Button">
                    <button class="tab_btn">Step 3</button>
                </div>
                <div class="col-md-3 Button">
                    <button class="tab_btn">Step 4</button>
                </div>

            </div>
        </div>

        <div class="row">

            <div class="content_box tm-section tm-bg-img" id="tm-section-1">

                <div class="content active tm-bg-white ie-container-width-fix-2">
                    <div class="container ie-h-align-center-fix">
                        <div class="row">
                            
                            <div class="col-md-7 First-Section">

                                <p>Departure From:</p>

                                <span class="p-input-icon-left">
                                    <i class="pi pi-search" />
                                    <InputText v-model="value1" placeholder="Place" />
                                </span>

                                <div class="col-md-12 ">

                                    <p>Going to:</p>

                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search" />
                                        <InputText v-model="value" placeholder="Place" />
                                    </span>

                                </div>

                                <div class="row Date-Section">

                                    <div class="col-md-12">
                                        <p>Tour Date</p>
                                        <Calendar v-model="checkInDate" showIcon iconDisplay="input" inputId="checkOutDateInput" :placeholder="currentDatePlaceholder" />
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-5 Second-Section">

                                <div class="row">

                                    <div class="col-md-6">
                                        <p>Adults</p>
                                        <Dropdown v-model="adultsItemHotel" :options="adultsItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Adults" class="w-full md:w-14rem" />
                                    </div>

                                    <div class="col-md-6">
                                        <p>Childrens (2-12 Years)</p>
                                        <Dropdown v-model="childrenItemHotel" :options="childrenItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Children" class="w-full md:w-14rem" />
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary tm-btn-search">Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                    </div>
                </div>

                <!-- Step 1 End -->

                <!-- Step 2 Start -->

                <div class="content active tm-bg-white ie-container-width-fix-2">
                    <div class="container ie-h-align-center-fix">
                        <div class="row">
                            
                            <div class="col-md-4 First-Section">

                                <table>
                                    <tr>
                                        <td>Departure From:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Going to:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Departure Date:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Num of person :</td>
                                        <td></td>
                                    </tr>
                                </table>

                            </div>

                            <div class="col-md-8 Second-Section">

                                <div class="row">

                                    <div class="col-md-12">

                                        <table>
                                            <tr>
                                                <td>Pick/Drop Time</td>
                                                <td>Car/Bus</td>
                                                <td>Available Seat</td>
                                                <td>Flight Number</td>
                                                <td>Departure/Arrival Time</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Dropdown v-model="selectedItemTime" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select" class="w-full md:w-14rem" />
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td>

                                                    <div class="card flex justify-content-center">
                                                        <InputText type="text" v-model="value" />
                                                    </div>

                                                </td>
                                                <td>
                                                    <Dropdown v-model="arrivalItemSelect" :options="arrivalItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select" class="w-full md:w-14rem" />
                                                </td>
                                            </tr>
                                        </table>

                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <button type="submit" class="btn btn-primary tm-btn-search">Previous</button>
                                    </div>

                                    <div class="col-md-6">
                                        <button type="submit" class="btn btn-primary tm-btn-search">Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                    </div>
                </div>

                <!-- Step 2 End -->

            </div>

        </div>
    </div>
</template>

<style scoped>
.Transport_Box{
    width: 100%;
    height: auto;
    padding: 40px 50px;
    background: #fd9604;
    margin-top: -70px;
}
.Transport_Box h3{
    font-size: 28px;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
    text-align: center;
    padding-bottom: 10px;
    letter-spacing: 0.5px;
}
.Tab-Section{
    background: #fff;
    padding-bottom: 25px;
}
.Button{
    height: auto;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
}
.tab_btn{
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    background: #ededed;
    border: none;
    color: #0b3ba7;
    width: 100%;
    height: 50px;
    margin-top: 35px !important;
    cursor: pointer;
    transition: 0.5s all;
}
button:focus {
    outline: none;
    outline: none;
}
.content_box{
    background: #fff;
    padding-bottom: 25px;
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
.tab_btn.active{
    background: #0b3ba7;
    color: #fff;
}
.First-Section{
    background: #fff;
    border-right: 1px solid #dddbdb;
}
.Second-Section{
    background: #fff;
    height: auto;
    padding-bottom: 20px;
}
.Date-Section{
    padding-bottom: 25px;
}
.First-Section h4{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 24px;
    letter-spacing: 0.5px;
    margin-top: 30px;
}
.First-Section p , .Second-Section p{
    color: #2A3855;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    padding-top: 22px;
}
input {
    width: 100%;
}
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    width: 100%;
}
.p-input-icon-left, .p-input-icon-right {
    position: relative;
    width: 100%;
}
.btn-primary{
    width: 80%;
    height: 30%;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px 38px;
}
.btn-primary:active{
    background: #fff !important;
    color: #fd9604;
    border: 1px solid #fd9604 !important;
    box-shadow: none !important;
}
.btn-primary:focus{
    background: #fff !important;
    color: #fd9604;
    border: 1px solid #fd9604 !important;
    box-shadow: none !important;
}
.btn-primary:hover{
    background: none;
    border: 1px solid #fd9604;
    color: #fd9604;
}
td, th {
    width: auto;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
}
</style>