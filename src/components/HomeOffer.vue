<script setup>
</script>

<template>

    <section class="offer-area">
        <div class="container">
            <div class="row">
                <div class="col-md-4 offer-box">
                            <img src="https://static.vecteezy.com/system/resources/previews/011/665/099/original/stylized-3d-discount-badge-illustration-for-black-friday-sale-free-png.png" alt="">
                            <p class="offer-p">Use Code:WELCOMESS</p> <br>
                            <h5 class="updescount">UP TO <span class="" style="color: #fd9604;"> 40 % OFF</span> </h5>
                            <h6 class="Booking">on Your 1ST Booking</h6>
                            <p class="Flight">of Flight, Hotels and more</p>

                            <a href="" class=""><i class="fas fa-arrow-right"></i></a>
                        
                </div>
                <div class="col-md-4">
                    <div class="col-md-12 offer-box1">
                            
                        <img src="https://static.vecteezy.com/system/resources/previews/015/693/497/original/travel-and-vacations-free-png.png" alt="">
                            <a href="" class=" icon"><i class="fas fa-arrow-right"></i></a>
                        <h4 class="Travel">Travel Insurance</h4> <br>
                            <h2 class="Worrying">No Worrying When Travel </h2>
                            <p class="Choose">Choose Our  Best Insurance</p>
                    </div>
                </div>


                <div class="col-md-4">
                    <div class="col-md-12 offer-box2">
                            
                            <img src="https://www.pngall.com/wp-content/uploads/8/Tour-PNG-Download-Image.png" alt="">
                                <a href="" class=" icon"><i class="fas fa-arrow-right"></i></a>
                            <h4 class="Travel1">Travel Insurance</h4> <br>
                                <h2 class="Worrying1">No Worrying When Travel </h2>
                                <p class="Choose1">Choose Our  Best Insurance</p>
                        </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.offer-area{
    width: 100%;
    height: auto;
    background: #ecebeb;
}
.offer-box{
    border: 1px solid #fd9604;
    border-radius: 10px;
     background: linear-gradient( to left, #af2424,#f12166);
}
.offer-box img{
    width: 80px;
    height: 80px;
    margin-top: 30px;
    float: left;
}
.offer-p{
    color: #fff;
    margin-top: 55px;
    margin-left: 5px;
    float: left;
    font-size: 16px;
}
.updescount{
    color: #fff;
    font-size: 18px;
    margin-top: -10px;
    margin-left: 5px;
    float: left;
}
.updescount span{
    font-size: 22px;
}
.Booking{
    font-size: 16px;
    color: #fff;
    margin-left: 85px;
    float: left;
}
.Flight{
    float: left;
    color: #fff;
    margin-left: 24%;
}
.offer-box a{
    font-size: 20px;
    border-radius: 50%;
    margin-left: 40px;
    padding: 10px 12px;
    background: #fd9604;
}
.offer-box1{
    border: 1px solid #fd9604;
    border-radius: 10px;
     background: linear-gradient( to left, #91af24,#5fbd34);
}
.offer-box1 img{
    width: 100px;
    height: 100px;
    float: left;
}
.Travel{
    color: #fff;
    margin-top: -20px;
    margin-left: 35%;
    font-size: 18px;
}
.Worrying{
    color: #fff;
    margin-top: -35px;
    margin-left: 35%;
    font-size: 16px;
    letter-spacing: 0.1px;
}
.Choose{
    font-size: 18px;
    margin-left: 35%;
    color: #fff;
}
.offer-box1 a{
    font-size: 20px;
    margin-left: 50%;
    margin-top: 13px;
    float: left;
    border-radius: 50%;
    padding: 10px 12px;
    background: #fd9604;
}
.offer-box2{
    border: 1px solid #fd9604;
    border-radius: 10px;
    background: linear-gradient( to left, #35b91a,rgb(30, 104, 216));
}
.offer-box2 img{
    width: 100px;
    height: 100px;
    float: left;
}
.Travel1{
    color: #fff;
    /* margin-top: -20px; */
    margin-left: 35%;
    font-size: 18px;
}
.Worrying1{
    color: #fff;
    margin-top: -35px;
    margin-left: 35%;
    font-size: 16px;
    letter-spacing: 0.1px;
}
.Choose1{
    font-size: 18px;
    margin-left: 35%;
    color: #fff;
}
.offer-box2 a{
    font-size: 20px;
    margin-left: 50%;
    margin-top: 13px;
    float: left;
    border-radius: 50%;
    padding: 10px 12px;
    background: #fd9604;
}
@media screen and (max-width: 768px) {
    .offer-box1{
        margin-top: 20px;
    }
    .offer-box2{
        margin-top: 20px;
    }
}
</style>