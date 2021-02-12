    
    
$('#carousel-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    items: 1,
   
})

$('#carousel-2').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    items: 3,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
})




$(document).ready(function(){
    $(".hamburger__menu").click(function(){
        $(".hamburger__inner").toggleClass("active");
    });
});

