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
</script>

<template>
        <div class="container SightSeeing_Box">
            <h3>Search and book fun things to do in just a few clicks here!</h3>
            <div class="row">
                <div class="col-md-7 First-Section">

                    <p>Enter Destination Name Or Activity</p>

                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="value1" placeholder="City & Hotel" />
                    </span>

                    <div class="row Date-Section">

                        <div class="col-md-4">
                            <p>Tour Date</p>
                            <Calendar v-model="checkInDate" showIcon iconDisplay="input" inputId="checkOutDateInput" :placeholder="currentDatePlaceholder" />
                        </div>

                        <div class="col-md-4">
                            <p>Adults</p>

                            <Dropdown v-model="adultsItemHotel" :options="adultsItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Adults" class="w-full md:w-14rem" />

                        </div>

                        <div class="col-md-4">
                            <p>Children (2-8 Years)</p>
                            <Dropdown v-model="childrenItemHotel" :options="childrenItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Children" class="w-full md:w-14rem" />
                        </div>

                    </div>
                </div>

                <div class="col-md-5 Second-Section">
                    <button type="submit" class="btn btn-primary tm-btn-search">Check Availability</button>
                </div>

            </div>
        </div>
</template>

<style scoped>
.SightSeeing_Box{
    width: 100%;
    height: auto;
    padding: 40px 50px;
    background: #fd9604;
    margin-top: -70px;
}
.SightSeeing_Box h3{
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    padding-top: 22px;
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
input{
    width: 100%;
}
button:focus {
    outline: none;
    outline: none;
}
.btn-primary{
    width: 80%;
    height: 30%;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: #fd9604;
    color: #fff;
    border: 1px solid #fd9604;
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
@media screen and (max-width: 768px) {
    .SightSeeing_Box h3 , .First-Section h4 , .Second-Section h4{
        font-size: 18px !important;
    }
    .First-Section p , .Second-Section p {
        font-size: 15px;
    }
    .btn-primary{
        font-size: 14px;
        padding: 10px;
        border-radius: 5px;
        height: auto;
    }
}
</style>