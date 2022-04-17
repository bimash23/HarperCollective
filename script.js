$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 0,
    nav: true,
   

    responsive: {
        420:{
            items:1
        },
        1000: {
            items:1
            
        },
    }
})

// For animation while sliding 
AOS.init({
    offset: 220,
    duration: 500,
 });