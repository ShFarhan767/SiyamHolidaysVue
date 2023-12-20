<script setup>
const cards = [
  {
    icon: '../../assets/img/Travel/VIsa/profile-2user.svg',
    title: 'Certified Tutors',
    color:'rgba(254, 108, 63, 0.1)',
    backgroundColor: '#FE6C3F',
  },
  {
    icon: '../../assets/img/Travel/VIsa/book.svg',
    title: 'Doubt Solving Sessions',
    color:'rgba(20, 149, 248, 0.1)',
    backgroundColor: '#1496F8',
  },
  {
    icon: '../../assets/img/Travel/VIsa/teacher.svg',
    title: 'Flexible & Regular Batches',
    color:'rgba(0, 204, 153, 0.1)',
    backgroundColor: '#00CC99',
  },
  {
    icon: '../../assets/img/Travel/VIsa/briefcase.svg',
    title: 'Free study materials',
    color:'rgba(255, 187, 15, 0.1)',
    backgroundColor: '#FFBD0F',
  },
];
</script>

<template>
    <section class="Visa_Eligibility">
        <div class="container">
            <h2>Visa types and eligibility <br> <span>assessment</span></h2>
            <p>
                Choosing the ideal destination for immigration is a pivotal <br>
                decision that can shape the trajectory of your life.
            </p>
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div v-for="(card , index) in cards" :key="index" class="col-md-5" :style="{ position: 'relative' }">
                            <div class="card">
                                <div class="row">
                                    <div class="Icon_img" :style="{ background: card.color }">
                                        <img :src="card.icon" alt="">
                                    </div>

                                    <div class="Title">
                                        <h3>{{ card.title }}</h3>
                                    </div>

                                </div>
                                <div class="card-line" :style="{ backgroundColor: card.backgroundColor }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Visa_Bg">
                <img src="../../assets/img/Travel/VIsa/Visa_Eligibile-Bg.png" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&family=Caveat:wght@500&family=Fira+Sans:ital,wght@0,600;1,400&family=Josefin+Sans&family=Mansalva&family=Nunito+Sans:wght@300;400&family=Onest&family=Open+Sans&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans&family=Poppins:wght@400;500;600&family=Roboto&family=Ysabeau+SC&display=swap');
.Visa_Eligibility{
    background-color: #EDF3F5;
    z-index: 1;
}
.Visa_Eligibility h2{
    text-align: start;
    font-family: Fira Sans,sans-serif;
    color: #0F172A;
    letter-spacing: .5px;
    font-size: 48px;
}
.Visa_Eligibility h2 span{
    color: #787B84;
}
.Visa_Eligibility p{
    text-align: start;
    line-height: 28px;
    letter-spacing: 0.5px;
    font-size: 18px;
    font-weight: 200;
    font-family: Fira Sans,sans-serif;
    margin-top: 30px;
}
.Visa_Bg{
    position: absolute;
    top: -120px;
    transform: translateY(-50%);
    z-index: -1;
    left: 290px;
    bottom: 0;
    transform: translate(0);
}
.card{
    width: 100%;
    padding: 30px 25px;
    background: #fff;
    margin-top: 30px;
}
.card-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 4px;
    height: 60px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    content: "";
}
.Icon_img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    background-color: rgba(254, 108, 63, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}
.Title{
    margin-left: 50px;
    margin-top: -50px;
}
.card h3{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-top: 8px;
}
@media only screen and (max-width: 768px) {
    .Visa_Eligibility h2{
        font-size: 24px;
    }
    .Visa_Eligibility p{
        font-size: 18px;
    }
    .card h3{
        font-size: 18px;
    }
}
</style>