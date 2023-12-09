<script setup></script>

<template>
    
    <div class="bg-primary py-3 d-none d-sm-block text-white fw-bold">
        <div class="container">
            <div class="row align-items-center gx-4">
                <div class="col-auto d-none d-lg-block fs--1"><span class="fas fa-map-marker-alt text-warning me-2" data-fa-transform="grow-3"></span>1010 Avenue, New York, NY 10018 US. </div>
                <div class="col-auto ms-md-auto order-md-2 d-none d-sm-flex fs--1 align-items-center"><span class="fas fa-clock text-warning me-2" data-fa-transform="grow-3"></span>Mon-Sat, 8.00-18.00. Sunday CLOSED</div>
                <div class="col-auto"><span class="fas fa-phone-alt text-warning" data-fa-transform="shrink-3"></span><a class="ms-2 fs--1 d-inline text-white fw-bold" href="tel:2123865575">212 386 5575, 212 386 5576</a></div>
            </div>
      </div>
    </div>
    <div class="sticky-top navbar-elixir">
        <div class="container">
            <nav class="navbar navbar-expand-lg"> 
                <a class="navbar-brand" href="/">
                    <img src="../../assets/img/Travel/Logo/logo_2.png" alt="logo" class="nav-logo" />
                </a>
                <button class="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNavbarCollapse" aria-controls="primaryNavbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="hamburger hamburger--emphatic"><span class="hamburger-box"><span class="hamburger-inner"></span></span></span></button>
                <div class="collapse navbar-collapse" id="primaryNavbarCollapse">
                    <ul class="navbar-nav py-3 py-lg-0 mt-1 mb-2 my-lg-0 ms-lg-n1">
                        <li class="nav-item">
                            <RouterLink  class="nav-link" to="/" role="button">Home</RouterLink>
                        </li>
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle dropdown-indicator" href="JavaScript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="pages/service.html">Services</a></li>
                                <li><a class="dropdown-item" href="pages/about.html">About</a></li>
                                <li><a class="dropdown-item" href="pages/alumni.html">Alumni</a></li>
                                <li><a class="dropdown-item" href="pages/blank.html">Blank Page</a></li>
                                <li><a class="dropdown-item" href="pages/404.html">404 Page</a></li>
                                <li><a class="dropdown-item" href="pages/login.html">Login</a></li>
                                <li><a class="dropdown-item" href="pages/registration.html">Registration</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle dropdown-indicator" href="JavaScript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="news/newsroom.html">Newsroom</a></li>
                                <li><a class="dropdown-item" href="news/news.html">Single News</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle dropdown-indicator" href="JavaScript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">Elements</a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="elements/buttons.html">Buttons</a></li>
                            <li><a class="dropdown-item" href="elements/colors.html">Colors</a></li>
                            <li><a class="dropdown-item" href="elements/googlemap.html">Google Map</a></li>
                            <li><a class="dropdown-item" href="elements/grid.html">Grid</a></li>
                            <li><a class="dropdown-item" href="elements/icons.html">Icons</a></li>
                            <li><a class="dropdown-item" href="elements/layouthelpers.html">Layout Helpers</a></li>
                            <li><a class="dropdown-item" href="elements/modal-video.html">Modal Video</a></li>
                            <li><a class="dropdown-item" href="elements/swiper.html">Swiper</a></li>
                            <li><a class="dropdown-item" href="elements/typography.html">Typography</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <RouterLink  class="nav-link" to="/about" role="button">Contact</RouterLink>
                        </li>
                    </ul><a class="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" href="https://themewagon.com/themes/elixir/" target="_blank">Purchase</a>
                </div>
            </nav>
      </div>
    </div>

</template>

<style scoped>
.bg-primary {
    background-color: #2A3855 !important
}
.btn-outline-primary {
    color: #fd9604 !important;
    border-color: #fd9604 !important;
    background: none;
    padding: 5px 15px;
}
.btn-outline-primary:hover {
    color: #fff !important;
    background-color: #fd9604;
    border-color: #fd9604;
}
.btn-outline-primary:active{
    background: none !important;
}
.navbar-brand{
    width: 25%;
}
.navbar-brand img{
    max-width: 55%;
}
@media screen and (max-width: 768px) {
    .navbar-brand{
        width: 50%;
    }
    .navbar-brand img{
    max-width: 100%;
    }
}
</style>