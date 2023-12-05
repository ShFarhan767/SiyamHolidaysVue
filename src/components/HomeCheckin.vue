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
            this.line.style.left = e.target.offsetLeft + "px";
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
                    <button class="tab_btn"><i class="fas fa-bed"></i></button>
                    <button class="tab_btn"><i class="fas fa-plane"></i></button>
                    <button class="tab_btn"><i class="fas fa-tree"></i></button>
                    <button class="tab_btn"><i class="fas fa-campground"></i></button>
                    <div class="line"></div>
                </div>

                <div class="ButtonName">
                    <p>Hotel</p>
                    <p>Flight</p>
                    <p>Guide</p>
                    <p>Activites</p>
                </div>

                <div class="content_box">
                    <div class="content active">
                       <div class="container">
                            <div class="row details">
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="From">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="To">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 date-input">
                                    <input type="date">
                                </div>
                                <div class="col-md-2 date-input" >
                                    <input type="date">
                                </div>
                                <div class="col-md-2">
                                    <select id="numberSelect" name="number">
                                        <option value="" disabled selected>Guest</option>
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
                                </div>
                                <div class="col-md-2 check">
                                    <a href="#" class="CheckBox-Btn">Search</a>
                                </div>
                            </div>
                       </div>
                    </div>

                    <div class="content">
                        <div class="container">
                            <div class="row details">
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="From">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="To">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 date-input">
                                    <input type="date" id="datePicker" name="selectedDate">
                                </div>
                                <div class="col-md-2 date-input" >
                                    <input type="date" id="datePicker" name="selectedDate">
                                </div>
                                <div class="col-md-2">
                                    <select id="numberSelect" name="number">
                                        <option value="" disabled selected>Guest</option>
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
                                </div>
                                <div class="col-md-2 check">
                                    <a href="#" class="CheckBox-Btn">Search Flight</a>
                                </div>
                            </div>
                       </div>
                    </div>

                    <div class="content">
                        <div class="container">
                            <div class="row details">
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="From">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="To">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 date-input">
                                    <input type="date" id="datePicker" name="selectedDate">
                                </div>
                                <div class="col-md-2 date-input" >
                                    <input type="date" id="datePicker" name="selectedDate">
                                </div>
                                <div class="col-md-2">
                                    <select id="numberSelect" name="number">
                                        <option value="" disabled selected>Guest</option>
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
                                </div>
                                <div class="col-md-2 check">
                                    <a href="#" class="CheckBox-Btn">Search Hotels</a>
                                </div>
                            </div>
                       </div>
                    </div>

                    <div class="content">
                        <div class="container">
                            <div class="row details">
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="From">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 Place">
                                    <input type="text" placeholder="To">
                                    <i class="fas fa-map-marker-alt" style="color: #fd9604;"></i>
                                </div>
                                <div class="col-md-2 date-input">
                                    <input type="date" id="datePicker" name="selectedDate">
                                </div>
                                <div class="col-md-2 date-input" >
                                    <input type="date" id="datePicker" name="selectedDate">
                                </div>
                                <div class="col-md-2">
                                    <select id="numberSelect" name="number">
                                        <option value="" disabled selected>Guest</option>
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
                                </div>
                                <div class="col-md-2 check">
                                    <a href="#" class="CheckBox-Btn">Search Trip</a>
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
.checkBox{
    margin: 0;
    padding: 0;
    overflow: hidden !important;
}
.fh5co-cta{
	background-image: url(https://images.pexels.com/photos/6130045/pexels-photo-6130045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
	height: 420px;
}
.fh5co-cta .overlay {
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    height: 420px;
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
.ButtonName{
    width: 100%;
    margin-left:5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.ButtonName p{
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    letter-spacing: 1px;
}
.tab_box{
    font-weight: 600;
    color: #919191;
    background: none;
    border: none;
    padding: 18px;
    cursor: pointer;    
}
.tab_btn{
    color: #919191;
    background: transparent;
    border: none;
    padding: 18px;
    cursor: pointer;    
}
.fa-bed{
    font-size: 32px;
    background: #fd9604;
    color: #fff;
    width: 50px;
    padding: 8px;
    height: 50px;
    border-radius: 50%;
}
.fa-plane{
    font-size: 32px;
    background: #fd9604;
    color: #fff;
    width: 50px;
    padding: 8px;
    height: 50px;
    border-radius: 50%;
    transform: rotateZ(-30deg);
}
.fa-tree{
    font-size: 32px;
    background: #fd9604;
    color: #fff;
    width: 50px;
    padding: 8px;
    height: 50px;
    border-radius: 50%;
}
.fa-campground{
    font-size: 32px;
    background: #fd9604;
    color: #fff;
    width: 50px;
    padding: 8px;
    height: 50px;
    border-radius: 50%;
}
.tab_box .tab_btn.active{
    color: #fd9604;
}
.line{
    position: absolute;
    width: 88px !important;
    left: 95px ;
    top: 165px !important;
    z-index: -1;
    height: 5px;
    background-color: #fd9604;
    border-radius: 10px;
    transition: width 0.3s ease, left 0.3s ease, top 0.3s ease;
}

/* .bg-line{
    width: 100%;
    height: 5px;
    background: red;
    z-index: -999;
} */


.col-md-2{
    border-left: 1px solid #e9e9e9;
}
.content_box .content{
    display: none;
}
.content_box .content.active{
    display: block;
}
.details{
    width: 100%;
    height: 65px;
    background: #fff;
}
.Place input{
    width: 85%;
    border: none;
    text-align: start;
    margin-top: 22px;
}
input{
    width:100%;
    border: none;
    text-align: start;
    margin-top: 22px;
    font-family: 'Nunito Sans', sans-serif;
}
input:focus {
    outline: none;
    border: none; 
}
/* .date-input::before{
    content: '\1F4C5';
    font-family: 'Segoe UI Symbol', 'Font Awesome 5 Free';
    position: absolute;
    top: 50%;
    right: 308px;
    transform: translateY(-50%);
    color: #fd9604;
    font-size: 18px;
    background: #fff;
    padding: 9px;
}
#datePicker::before{
    content: '\1F4C5';
    font-family: 'Segoe UI Symbol', 'Font Awesome 5 Free';
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: #fd9604;
    font-size: 18px;
    background: #fff;
    padding: 9px;
} */
select{
    width: 110px;
    border: none;
    text-align: start;
    margin-top: 22px;
    color: #919191;
}
select:focus {
    outline: none;
    border: none; 
}
.check{
    background: #fd9604;
    padding: 20px;
    text-align: center;
}
.CheckBox-Btn{
    font-size: 16px;
    text-decoration: none;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
}

</style>