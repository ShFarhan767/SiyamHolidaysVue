<script setup>
import { ref, onMounted , computed } from 'vue';

const tabs = ref(null);
const allContent = ref(null);
const line = ref(null);
let activeTabIndex = ref(0);

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

      activeTabIndex.value = Array.from(tabs.value).indexOf(tab);
      allContent.value[activeTabIndex.value].classList.add('active');
    });
  });
};

const countries = [
  {
    icon: '../../assets/img/Travel/VIsa/Flag/Canada-flag.png',
    name: 'Canada',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_02.png',
    name: 'Belgium',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_03.png',
    name: 'Denmark',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_04.png',
    name: 'Australia',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_05.png',
    name: 'France',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_06.png',
    name: 'Germany',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_07.png',
    name: 'Greece',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_08.png',
    name: 'Hungary',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_09.png',
    name: 'Iceland',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_10.png',
    name: 'Ireland',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_11.png',
    name: 'Italy',
  },
  {
    icon: '../../assets/img/Travel/VIsa/Flag/img_12.png',
    name: 'Luxembourg',
  },
];

const American = [
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_02.png',
    name: 'Belgium',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/Canada-flag.png',
    name: 'Canada',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_03.png',
    name: 'Denmark',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_04.png',
    name: 'Australia',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_05.png',
    name: 'France',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_06.png',
    name: 'Germany',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_07.png',
    name: 'Greece',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_08.png',
    name: 'Hungary',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_09.png',
    name: 'Iceland',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_10.png',
    name: 'Ireland',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_11.png',
    name: 'Italy',
    },
    {
    icon: '../../assets/img/Travel/VIsa/Flag/img_12.png',
    name: 'Luxembourg',
    },
];

</script>

<template>

    <section class="Visa_Country">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3>Make Your Choice for the <br><span>Preferred Nation</span></h3>
                </div>
                <div class="col-md-5 mt-4 description">
                    <p>
                        At the heart of our commitment to providing exceptional
                        <br>
                        immigration solutions stands our trusted
                    </p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="Tab-Section">
                
                <div class="Button">
                    <button class="tab_btn active first">Europe</button>
                </div>
                <div class="Button">
                    <button class="tab_btn">North America</button>
                </div>
                <div class="Button">
                    <button class="tab_btn">Asia</button>
                </div>
                <div class="Button">
                    <button class="tab_btn">Latin America</button>
                </div>
                <div class="Button">
                    <button class="tab_btn">Oceania</button>
                </div>
                <div class="Button">
                    <button class="tab_btn">Africa</button>
                </div>
                <div class="Button">
                    <button class="tab_btn">Antarctica</button>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="content_box tm-section tm-bg-img" id="tm-section-1">

                <div class="content active tm-bg-white ie-container-width-fix-2 fadeInUp">
                    <div class="ie-h-align-center-fix">
                        <div class="row">
                            <div v-for="(country, index) in countries" :key="index" class="Flag_Card">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img :src="country.icon" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{ country.name }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content tm-bg-white ie-container-width-fix-2 fadeInUp">
                    <div class="ie-h-align-center-fix">
                        <div class="row">
                            <div v-for="(North, index) in American" :key="index" class="Flag_Card">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img :src="North.icon" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{ North.name }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content tm-bg-white ie-container-width-fix-2 fadeInUp">
                    <div class="ie-h-align-center-fix">
                        <div class="row">
                            <div v-for="(country, index) in countries" :key="index" class="Flag_Card">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img :src="country.icon" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{ country.name }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content tm-bg-white ie-container-width-fix-2 fadeInUp">
                    <div class="ie-h-align-center-fix">
                        <div class="row">
                            <div v-for="(country, index) in countries" :key="index" class="Flag_Card">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img :src="country.icon" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{ country.name }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content tm-bg-white ie-container-width-fix-2 fadeInUp">
                    <div class="ie-h-align-center-fix">
                        <div class="row">
                            <div v-for="(country, index) in countries" :key="index" class="Flag_Card">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img :src="country.icon" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{ country.name }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content tm-bg-white ie-container-width-fix-2 fadeInUp">
                    <div class="ie-h-align-center-fix">
                        <div class="row">
                            <div v-for="(country, index) in countries" :key="index" class="Flag_Card">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img :src="country.icon" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{ country.name }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content tm-bg-white ie-container-width-fix-2 fadeInUp">
                    <div class="ie-h-align-center-fix">
                        <div class="row">
                            <div v-for="(country, index) in countries" :key="index" class="Flag_Card">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img :src="country.icon" alt="">
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{ country.name }}</h2>
                                        </div>
                                    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&family=Caveat:wght@500&family=Fira+Sans:ital,wght@0,600;1,400&family=Josefin+Sans&family=Mansalva&family=Nunito+Sans:wght@300;400&family=Onest&family=Open+Sans&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans&family=Poppins:wght@400;500;600&family=Roboto&family=Ysabeau+SC&display=swap');
.Visa_Country h3{
    text-align: start;
    font-family: Fira Sans,sans-serif;
    color: #0F172A;
    letter-spacing: .5px;
    font-size: 46px;
}
.Visa_Country h3 span{
    color: #787B84;
}
.description{
    margin-left: 8%;
}
.Visa_Country p{
    font-size: 17px;
    line-height: 28px;
    letter-spacing: -0.2px;
    font-weight: 500;
}

.Tab-Section {
    width: 95%;
    margin-top: 50px;
    background: #F4F8FA;
    padding: 8px;
    margin-left: 35px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Button {
    width: 13%;
    height: auto;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.tab_btn {
    font-size: 18px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none;
    font-weight: 600;
    color: #0b3ba7;
    background: transparent;
    width: 100%;
    height: 45px;
    cursor: pointer;
    transition: 0.5s all;
    position: relative;
}

.Button:not(:last-child):after {
    content: '';
    position: absolute;
    top: 10%;
    right: 0px;
    width: 1px;
    height: 80%;
    background-color: #ccc;
}

button:focus {
    outline: none;
    outline: none;
}
.content_box{
    background: #fff;
    margin-top: 50px;
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
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 17px 35px #00000012;
    color: #0F172A;
    z-index: 1;
}
.Flag_Card{
    width: 20%;
    padding: 0px;
    margin-top: 35px;
    margin-left: 57px;
}
.card{
    width: 100%;
    padding: 20px;
    border: 1px solid #EDF3F5;
    transition: all .25s ease;
    cursor: pointer;
}
.card:hover{
    box-shadow: 0 17px 35px #00000012;
    transform: translateY(-2px);
}
.card h2{
    font-size:22px;
    margin-top: 10px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    letter-spacing: 0.5px;
}
@keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@-webkit-keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both
}

.animatedFadeInUp {
    opacity: 0
}

.fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
}

@media only screen and (max-width: 768px) {

    .Visa_Country h3{
        font-size: 24px;
    }
    .description{
        padding: 0;
        margin-left: 20px;
    }
    .description p{
        font-size: 14px;
    }

    .Tab-Section {
        flex-direction: column;
        align-items: stretch;
        margin-left: 0;
    }

    .Button {
        width: 100%;
        margin-bottom: 10px;
        float: none;
    }

    .Button:not(:last-child):after {
        display: none;
    }

    .Flag_Card {
        width: 40%;
        margin-left: 23px;
    }
    .card h2{
        margin-top: 18px;
        font-size: 15px;
    }

    .card {
        width: 100%; /* Make cards full width on smaller screens */
    }
}
</style>