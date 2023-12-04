<script>
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    const tabs = document.querySelectorAll('.tab_btn');
    const all_content = document.querySelectorAll('.content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            // Remove 'active' class from all tabs
            tabs.forEach(t => {
                t.classList.remove('active');
            });

            // Remove 'active' class from all content elements
            all_content.forEach(content => {
                content.classList.remove('active');
            });

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Add 'active' class to the corresponding content based on the clicked tab index
            const tabIndex = Array.from(tabs).indexOf(tab);
            all_content[tabIndex].classList.add('active');

            // Update the line position if needed
            var line = document.querySelector('.line');
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";
        });
    });


});

</script>

<template>
    
    <section class="checkBox">

        <div class="fh5co-cta">
            <div class="overlay"></div>

            <div class="container">
                <div class="tab_box">
                    <button class="tab_btn"><i class="fas fa-bed"></i></button>
                    <button class="tab_btn"><i class="fas fa-plane"></i></button>
                    <button class="tab_btn"><i class="fas fa-tree"></i></button>
                    <button class="tab_btn"><i class="fas fa-campground"></i></button>
                    <div class="line"></div>
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
                                    <a href="#" class="CheckBox-Btn">Search Destination</a>
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
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgba(229, 229, 229);
    position: relative;
}
.tab_box .tab_btn{
    font-size: 18px;
    font-weight: 600;
    color: #919191;
    background: none;
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
    top: 87px;
    left: 8.5%;
    width: 90px;
    height: 5px;
    background-color: #fd9604;
    border-radius: 10px;
}

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
    width: 110px;
    border: none;
    text-align: start;
    margin-top: 22px;
}
input{
    width: 135px;
    border: none;
    text-align: start;
    margin-top: 22px;
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
    padding: 21px;
    text-align: center;
}
.CheckBox-Btn{
    font-size: 12px;
    text-decoration: none;
    color: #000;
}
</style>