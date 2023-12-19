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

const flightClass = ref();
const classItems = ref(Array.from({ length: 10 }, (_, i) => ({ label: `${i + 1} Rooms`, value: i + 1 })));
</script>

<template>
        <div class="container Flight_Box">
            <h3>Search and book your flight in 3 easy steps here!</h3>
            <div class="row">
                <div class="col-md-7 First-Section">
                    <h4>1. Leaving From/Going To</h4>

                    <div class="row">

                        <div class="col-md-6">
                            <p>Leaving From</p>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="value1" placeholder="City & Hotel" />
                            </span>
                        </div>

                        <div class="col-md-6">
                            <p>Going to</p>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="value1" placeholder="City & Hotel" />
                            </span>
                        </div>

                    </div>

                    <h4>2. Duration of Stay</h4>

                    <div class="row Date-Section">

                        <div class="col-md-6">
                            <p>Departing</p>
                            <Calendar v-model="checkInDate" showIcon iconDisplay="input" inputId="checkOutDateInput" :placeholder="currentDatePlaceholder" />
                        </div>


                        <div class="col-md-6">
                            <p>Returning</p>
                            <Calendar v-model="checkOutDate" showIcon iconDisplay="input" inputId="checkOutDateInput" placeholder="CheckOut Date"/>
                        </div>

                    </div>
                </div>

                <div class="col-md-5 Second-Section">
                    <h4>3. Search Hotels</h4>

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
                            <h4>Class</h4>
                            <div class="col-md-12">
                                <p>Choose Class</p>
                            <Dropdown v-model="flightClass" :options="classItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Class" class="w-full md:w-14rem" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</template>

<style scoped>
.Flight_Box{
    width: 100%;
    height: auto;
    padding: 40px 50px;
    background: #fd9604;
    margin-top: -70px;
}
.Flight_Box h3{
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
    height: auto;
    padding-bottom: 20px;
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
  right: 10px; 
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-top: 5px solid #000; 
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
@media screen and (max-width: 768px) {
    .Flight_Box h3 , .First-Section h4 , .Second-Section h4{
        font-size: 18px !important;
    }
    .First-Section p , .Second-Section p {
        font-size: 15px;
        margin-top: 15px;
    }
    .btn-primary{
        font-size: 14px;
        padding: 10px;
        border-radius: 5px;
        height: auto;
    }
}
</style>