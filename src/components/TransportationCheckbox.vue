<script setup>
import { ref, onMounted , computed } from 'vue';

const tabs = ref([]);
const allContent = ref([]);
const line = ref(null);
const activeTabIndex = ref(0);
const isNextButtonEnabled = ref(false);

onMounted(() => {
  initTabs();
});

const initTabs = () => {
  tabs.value = document.querySelectorAll('.tab_btn');
  allContent.value = document.querySelectorAll('.content');
  line.value = document.querySelector('.line');

  tabs.value.forEach((tab, index) => {
    tab.addEventListener('click', () => handleTabClick(index));
  });
};

const handleTabClick = (index) => {
  if (isNextButtonEnabled.value) {
    activeTabIndex.value = index;
    updateTabs();
  }
};

const nextTab = () => {
  if (activeTabIndex.value < tabs.value.length - 1) {
    activeTabIndex.value++;
    updateTabs();
    isNextButtonEnabled.value = false; // Disable tabs after moving to the next tab
  }
};

const prevTab = () => {
  if (activeTabIndex.value > 0) {
    activeTabIndex.value--;
    updateTabs();
  }
};

const updateTabs = () => {
  tabs.value.forEach((t) => t.classList.remove('active'));
  allContent.value.forEach((content) => content.classList.remove('active'));

  tabs.value[activeTabIndex.value].classList.add('active');
  allContent.value[activeTabIndex.value].classList.add('active');
};



import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const departureFrom = ref('');
const goingTo = ref('');
const departureDate = ref(null);
const value3 = ref(null);
const value4 = ref(null);
const value5 = ref(null);
const value6 = ref(null);
const value7 = ref(null);
const value8 = ref(null);




import Calendar from 'primevue/calendar';
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

const selectedTitle = ref();
const titles = ref([
    { name: 'Md.', code: 'NY' },
    { name: 'Mr.', code: 'RM' },
    { name: 'Mrs.', code: 'LDN' },
    { name: 'Miss'},
]);

const selectedNationality = ref();
const nationalities = ref([
    { name: 'Bangladeshi'},
    { name: 'Austrilan'},
    { name: 'Indian' },
    { name: 'Pakistani'},
    { name: 'American'},
    { name: 'Canadian'},
    { name: 'Thai'},
]);

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
                                    <InputText v-model="departureFrom" placeholder="Place" />
                                </span>

                                <div class="col-md-12 ">

                                    <p>Going to:</p>

                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search" />
                                        <InputText v-model="goingTo" placeholder="Place" />
                                    </span>

                                </div>

                                <div class="row Date-Section">

                                    <div class="col-md-12">
                                        <p>Tour Date</p>
                                        <Calendar v-model="departureDate" showIcon iconDisplay="input" inputId="checkOutDateInput" :placeholder="currentDatePlaceholder" />
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
                                    <div class="col-md-12 First-Button">
                                        <button type="submit" class="btn btn-primary tm-btn-search" @click="nextTab">Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                    </div>
                </div>

                <!-- Step 1 End -->

                <!-- Step 2 Start -->

                <div class="content tm-bg-white ie-container-width-fix-2">
                    <div class="container ie-h-align-center-fix">
                        <div class="row">
                            
                            <div class="col-md-4 First-Section">

                                <table>
                                    <tr>
                                        <td>Departure From:</td>
                                        <td>{{ departureFrom }}</td>
                                    </tr>
                                    <tr>
                                        <td>Going to:</td>
                                        <td>{{ goingTo }}</td>
                                    </tr>
                                    <tr>
                                        <td>Departure Date:</td>
                                        <td>{{ departureDate }}</td>
                                    </tr>
                                    <tr>
                                        <td>Num of person :</td>
                                        <td>
                                            Adult (<span class="no_of_adult">{{ adultsItemHotel }}</span>), 
                                            Child (<span class="no_of_child">{{ childrenItemHotel }}</span>) 
                                        </td>
                                    </tr>
                                </table>

                            </div>

                            <div class="col-md-8 Second-Section">

                                <div class="row">

                                    <div class="col-md-12">

                                        <div class="table-responsive">

                                            <table class="table">
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

                                                        <InputText type="text" v-model="value3" />

                                                    </td>
                                                    <td>
                                                        <Dropdown v-model="arrivalItemSelect" :options="arrivalItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select" class="w-full md:w-14rem" />
                                                    </td>
                                                </tr>
                                            </table>

                                        </div>

                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-6 Step-2-Button">
                                        <button type="submit" class="btn btn-primary tm-btn-search" @click="prevTab">Previous</button>
                                    </div>

                                    <div class="col-md-6 Step-2-Button">
                                        <button type="submit" class="btn btn-primary tm-btn-search" @click="nextTab">Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                    </div>
                </div>

                <!-- Step 2 End -->

                <!-- Step 3 Start -->

                <div class="content tm-bg-white ie-container-width-fix-2">
                    <div class="container ie-h-align-center-fix">
                        <div class="row">
                            
                            <div class="col-md-4 First-Section">

                                <table>
                                    <tr>
                                        <td>Departure From:</td>
                                        <td>{{ departureFrom }}</td>
                                    </tr>
                                    <tr>
                                        <td>Going to:</td>
                                        <td>{{ goingTo }}</td>
                                    </tr>
                                    <tr>
                                        <td>Departure Date:</td>
                                        <td>{{ departureDate }}</td>
                                    </tr>
                                    <tr>
                                        <td>Num of person :</td>
                                        <td>
                                            Adult (<span class="no_of_adult">{{ adultsItemHotel }}</span>), 
                                            Child (<span class="no_of_child">{{ childrenItemHotel }}</span>) 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pick/Drop Time</td>
                                        <td>{{ selectedItemTime }}</td>
                                    </tr>
                                    <tr>
                                        <td>Car / Bus</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Available Seat</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Flight Number</td>
                                        <td>{{ value3 }}</td>
                                    </tr>
                                    <tr>
                                        <td>Departure/Arrival Time</td>
                                        <td>{{ arrivalItemSelect }}</td>
                                    </tr>
                                </table>

                            </div>

                            <div class="col-md-8 Second-Section">

                                <div class="row">

                                    <div class="col-md-12">

                                        <h2>Leading Passenger</h2>

                                        <div class="row">
                                            <div class="col-md-2">
                                                <p>Title</p>

                                                <Dropdown v-model="selectedTitle" :options="titles" optionLabel="name" placeholder="Mr." class="w-full md:w-14rem" />

                                            </div>

                                            <div class="col-md-3">
                                                <p>First Name</p>
                                                
                                                <div class="card flex justify-content-center">
                                                    <InputText type="text" v-model="value4" />
                                                </div>

                                            </div>

                                            <div class="col-md-3">
                                                <p>Last Name</p>

                                                <div class="card flex justify-content-center">
                                                    <InputText type="text" v-model="value5" />
                                                </div>

                                            </div>

                                            <div class="col-md-4">
                                                <p>Mobile No</p>

                                                <div class="card flex justify-content-center">
                                                    <InputText type="text" v-model="value8" />
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="row">

                                    <div class="col-md-6">
                                        <p>Nationality</p>
                                        <Dropdown v-model="selectedNationality" :options="nationalities" optionLabel="name" placeholder="Select" class="w-full md:w-14rem" />

                                    </div>

                                    <div class="col-md-6">
                                        <p>Email</p>
                                        
                                        <div class="card flex justify-content-center">
                                            <InputText type="text" v-model="value6" />
                                        </div>

                                    </div>

                                </div>


                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Add Special Request</p>

                                        <div class="card flex justify-content-center">
                                            <Textarea v-model="value7" rows="5" cols="30" placeholder="Write any request here.." />
                                        </div>

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 Step-3-Button">
                                        <button type="submit" class="btn btn-primary tm-btn-search" @click="prevTab"> Previous</button>
                                    </div>

                                    <div class="col-md-6 Step-3-Button">
                                        <button type="submit" class="btn btn-primary tm-btn-search" @click="nextTab"> Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                    </div>
                </div>

                <!-- Step 3 End -->

                <!-- Step 4 Start -->

                <div class="content tm-bg-white ie-container-width-fix-2">
                    <div class="container ie-h-align-center-fix">
                        <div class="row">
                            
                            <div class="col-md-5 First-Section Table">

                                <div class="table">

                                    <table class="table">
                                        <tr>
                                            <td>Departure From:</td>
                                            <td>{{ departureFrom }}</td>
                                        </tr>
                                        <tr>
                                            <td>Going to:</td>
                                            <td>{{ goingTo }}</td>
                                        </tr>
                                        <tr>
                                            <td>Departure Date:</td>
                                            <td>{{ departureDate }}</td>
                                        </tr>
                                        <tr>
                                            <td>Num of person :</td>
                                            <td>
                                                Adult (<span class="no_of_adult">{{ adultsItemHotel }}</span>), 
                                                Child (<span class="no_of_child">{{ childrenItemHotel }}</span>) 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pick/Drop Time</td>
                                            <td>{{ selectedItemTime }}</td>
                                        </tr>
                                        <tr>
                                            <td>Car / Bus</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Available Seat</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Flight Number</td>
                                            <td>{{ value3 }}</td>
                                        </tr>
                                        <tr>
                                            <td>Departure/Arrival Time</td>
                                            <td>{{ arrivalItemSelect }}</td>
                                        </tr>
                                        <tr>
                                            <td>Passenger Name</td>
                                            <td>{{ value4 }} {{ value5 }}</td>
                                        </tr>
                                        <tr>
                                            <td>Nationality</td>
                                            <td>{{ selectedNationality }}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{{ value6 }}</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile No</td>
                                            <td>{{ value8 }}</td>
                                        </tr>
                                        <tr>
                                            <td>Special Request</td>
                                            <td>{{ value7 }}</td>
                                        </tr>
                                    </table>

                                </div>

                            </div>

                            <div class="col-md-7 Second-Section">

                                <div class="row ">

                                    <h2>Price Details</h2>
                                    <div class="col-md-12">

                                        <table class="table">
                                            <tbody class="table">
                                                <tr>
                                                    <td>Texi / Private Car 3 seat.</td>
                                                    <td class="text-right">THB 600</td>
                                                </tr>
                                                <tr>
                                                    <td>Tax</td>
                                                    <td class="text-right">Included</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount/Coupon</td>
                                                    <td class="text-right">-558</td>
                                                </tr>
                                                <tr class="table-footer">
                                                    <td>Total</td>
                                                    <td class="text-right">550</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-6 Step-4-Button">
                                        <button type="submit" class="btn btn-primary tm-btn-search" @click="prevTab">Previous</button>
                                    </div>

                                    <div class="col-md-6 Step-4-Button">
                                        <button type="submit" class="btn btn-primary tm-btn-search">Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                    </div>
                </div>

                <!-- Step 4 End -->

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
.Tab-Section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #fff;
    padding: 25px;
}

.Button {
    flex: 1 1 100%; /* Equal width for each button, full width on smaller screens */
    max-width: 220px; /* Maximum width for each button, adjust as needed */
    background: #fff;
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
    padding-bottom: 0px;
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
tr .table{
    width: 100%;
}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 15px;
}
.text-right{
    text-align: right;
}
.table-footer{
    background: #ddd;
    height: 65px;
}
.Second-Section h2{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 26px;
    letter-spacing: 1px;
}
@media screen and (max-width: 768px) {
    .Button {
        flex: 1 1 25%; /* 4 columns on larger screens */
        max-width: none; /* Reset max-width on larger screens */
    }
    .tab_btn{
        font-size: 14px;
    }
    .First-Section{
        border: none;
    }
    .table{
        margin-left: -10px;
    }
    td{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 12px;
        font-size: 14px;
    }
    .First-Button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Transport_Box h3{
        font-size: 24px;
    }
    .Second-Section h2{
        font-size: 22px;
        margin-top: 20px;
    }
    .Step-2-Button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-primary{
        margin: 0;
        padding: 25px;
    }
    .Step-3-Button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Step-4-Button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Table{
        display: flex;
        justify-content: center;
        align-items: center;
    }

}
</style>