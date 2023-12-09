<script setup></script>

<template>
    
    <!--    Main Content-->

    <section class="py-0">
        <div class="swiper theme-slider min-vh-100" data-swiper='{"loop":true,"allowTouchMove":false,"autoplay":{"delay":5000},"effect":"fade","speed":800}'>
            <div class="swiper-wrapper">
                <div class="swiper-slide" data-zanim-timeline="{}">
                    <div class="bg-holder first-slider"></div>
                    <!--/.bg-holder-->
                    <div class="container">
                        <div class="row min-vh-100 py-8 align-items-center" data-inertia='{"weight":1.5}'>
                            <div class="col-sm-8 col-lg-7 px-5 px-sm-3">
                                <div class="overflow-hidden">
                                    <h1 class="fs-4 fs-md-5 lh-1" data-zanim-xs='{"delay":0}'>Helping Leaders</h1>
                                </div>
                                <div class="overflow-hidden">
                                    <p class="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs" data-zanim-xs='{"delay":0.1}'>We look forward to help you in taking your company to new height.</p>
                                </div>
                                <div class="overflow-hidden">
                                    <div data-zanim-xs='{"delay":0.2}'><a class="btn btn-primary me-3 mt-3" href="#!">Read more<span class="fas fa-chevron-right ms-2"></span></a><a class="btn btn-warning mt-3" href="contact.html">Contact us<span class="fas fa-chevron-right ms-2"></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" data-zanim-timeline="{}">
                    <div class="bg-holder second-slider"></div>
                    <!--/.bg-holder-->
                    <div class="container">
                        <div class="row min-vh-100 py-8 align-items-center" data-inertia='{"weight":1.5}'>
                            <div class="col-sm-8 col-lg-7 px-5 px-sm-3">
                                <div class="overflow-hidden">
                                    <h1 class="fs-4 fs-md-5 lh-1" data-zanim-xs='{"delay":0}'>Expert Consultants</h1>
                                </div>
                                <div class="overflow-hidden">
                                    <p class="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs" data-zanim-xs='{"delay":0.1}'>Over 10 years of experience in helping clients finding comprehensive solutions.</p>
                                </div>
                                <div class="overflow-hidden">
                                    <div data-zanim-xs='{"delay":0.2}'><a class="btn btn-primary me-3 mt-3" href="#!">Read more<span class="fas fa-chevron-right ms-2"></span></a><a class="btn btn-warning mt-3" href="contact.html">Contact us<span class="fas fa-chevron-right ms-2"></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" data-zanim-timeline="{}">
                    <div class="bg-holder third-slider"></div>
                    <!--/.bg-holder-->
                    <div class="container">
                        <div class="row min-vh-100 py-8 align-items-center" data-inertia='{"weight":1.5}'>
                            <div class="col-sm-8 col-lg-7 px-5 px-sm-3">
                                <div class="overflow-hidden">
                                    <h1 class="fs-4 fs-md-5 lh-1" data-zanim-xs='{"delay":0}'>Growth Partners</h1>
                                </div>
                                <div class="overflow-hidden">
                                    <p class="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs" data-zanim-xs='{"delay":0.1}'>Connect with top consultants hand-picked by Elixir consulting and finance.</p>
                                </div>
                                <div class="overflow-hidden">
                                    <div data-zanim-xs='{"delay":0.2}'><a class="btn btn-primary me-3 mt-3" href="#!">Read more<span class="fas fa-chevron-right ms-2"></span></a><a class="btn btn-warning mt-3" href="contact.html">Contact us<span class="fas fa-chevron-right ms-2"></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-nav">
                <div class="swiper-button-prev"><span class="fas fa-chevron-left"></span></div>
                <div class="swiper-button-next"><span class="fas fa-chevron-right"></span></div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.first-slider{
    background-image:url(../../assets/img/Travel/Slider-Bg-1.jpeg);
}
.second-slider{
    background-image:url(../../assets/img/Travel/Slider-Bg-2.jpeg);
}
.third-slider{
    background-image:url(../../assets/img/Travel/Slider-Bg-3.jpeg);
}
.fs-4 {
    color: #fd9604 !important;
}
.text-primary {
    color: #fd9604!important;
}
.btn-primary {
    color: #fff !important;
    border-color: #0b3ba7 !important;
    background: none;
    padding: 5px 15px;
    border-radius: 25px;
}
.btn-primary:hover {
    color: #fff !important;
    background-color: #0b3ba7;
    border-color: #0b3ba7;
}
.btn-primary:focus {
    box-shadow: none;
}
.btn-warning {
    color: #fff !important;
    border-color: #fd9604 !important;
    background: none;
    padding: 5px 15px;
    border-radius: 25px;
}
.btn-warning:hover {
    color: #fff !important;
    background-color: #fd9604;
    border-color: #fd9604;
}
.btn-warning:focus {
    box-shadow: none;
}
</style>