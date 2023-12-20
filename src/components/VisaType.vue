<script setup>
const cards = [
  {
    icon: '../../assets/img/Travel/VIsa/sv_01.svg',
    title: 'Tourist Visa',
    description: 'Visit new places to discover with a Tourist Visa. We deliver your documents ...',
    color: '#FE6C3F',
  },
  {
    icon: '../../assets/img/Travel/VIsa/sv_02.svg',
    title: 'Commercial Visa',
    description: 'Developing your trade, setting up new sales channels Your visa is ready...',
    color: '#897CB5',
  },
  {
    icon: '../../assets/img/Travel/VIsa/sv_02.svg',
    title: 'Diplomatic Visa',
    description: 'For government officials, diplomats, and representatives of international....',
    color: "#FB3F7E",
  },
  {
    icon: '../../assets/img/Travel/VIsa/sv_03.svg',
    title: 'Student Visa',
    description: 'Embarking on a journey of higher education in a foreign country opens doors to...',
    color: "#00CC99",
  },
  {
    icon: '../../assets/img/Travel/VIsa/sv_04.svg',
    title: 'Residence Visa',
    description: 'Expert Guidance for a Seamless Immigration Journey Expert Guidance...',
    color: "#0091FF",
  },
  {
    icon: '../../assets/img/Travel/VIsa/sv_05.svg',
    title: 'Working Visa',
    description: 'Get your Visa now for new business and earning opportunities. We deliver your...',
    color: "#FFBD0F",
  },
];
</script>

<template>
    
    <section class="Visa_Type">
        <div class="container">
            <h2>Visa types and eligibility <br> <span>assessment</span></h2>
            <div class="row">
                <div v-for="(Card , index) in cards" :key="index" class="col-md-4 Type_Card">
                    <div class="card">
                        <div class="Icon_img" :style="{ background: Card.color }">
                            <img :src="Card.icon" alt="">
                        </div>
                        <h3>{{ Card.title }}</h3>
                        <p>{{ Card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.Visa_Type h2{
    text-align: center;
    font-family: Fira Sans,sans-serif;
    color: #0b3ba7;
    letter-spacing: .5px;
    font-size: 48px;
    padding: 15px;
}
.Visa_Type h2 span{
    color: #787B84;
}
.card {
  width: 360px;
  min-width: 320px;
  height:auto;
  background:#fff;
  position:relative;
  z-index:10;
  margin-top: 25px;
  min-height:300px;
  cursor:pointer;
  transition: all .25s ease;
  border: 1px solid #EDF3F5;
  border-radius: 30px ;
  overflow: hidden;
}
.card::before {
    position: absolute;
    width: 70px;
    height: 160px;
    border-radius: 35px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    -ms-border-radius: 35px;
    -o-border-radius: 35px;
    background-color: #F4F8FA;
    content: "";
    top: -50px;
    left: -10px;
    z-index: -1;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.card:hover {
  transform:translate(0, -10px);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
}
.Icon_img{
    width: 58px;
    height: 58px;
    background-color: #FE6C3F;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 27px;
    margin-top: 32px;
    box-shadow: 0px 4px 7px rgba(178, 190, 205, 0.29);
}
.card h3{
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.5px;
    padding-left: 35px;
    margin-top: 40px;
}
.card p{
    padding-left: 35px;
    margin-top: 25px;
}
@media only screen and (max-width: 768px) {
  .Type_Card{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Visa_Type h2{
    font-size: 22px;
  }
  .card{
    width: 290px;
    min-width: 290px;
  }
  .card h3{
    padding-left: 20px;
  }
  .card p{
    padding-left: 20px;
    font-size: 14px;
  }
}
</style>