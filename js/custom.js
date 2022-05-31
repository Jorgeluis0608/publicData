$(function() {
    new WOW().init();
});
$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        margin: 10,
        autoWidth: false,
        dots: true,
        nav: true,
        navText: ["<img src='./img/arr-l.png'>", "<img src='./img/arr-r.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });
});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

//... filter with selected category
var categories = [];
var min = 0;
var max = 100;
var length = 0;
$(function() {
    $(".form-check-label input").change(function(){
        if($(this).hasClass("filter-age")){
            length = $(".category-age").find("input:checkbox:checked").length;
            if(length == 1){
                min = parseInt($(".category-age").find("input:checkbox:checked").attr("min"));
                max = parseInt($(".category-age").find("input:checkbox:checked").attr("max"));                
            }else{
                min = 0;
                max = 100;
            }
        }else{
            if($(this).is(":checked")){
                categories.push($(this).val());
            }else{
                categories.splice(categories.indexOf($(this).val()), 1);
            }
        }
        filter();
    })
})
function filter(){
    var match_count = 0; 
    $("#peopletop").find(".mtchs-rcrd-lnks").each(function(){
        var position = $(this).find(".scnd-h6-ttl").find("strong:first-child").html();
        var age = parseInt($(this).find(".scnd-h6-ttl").find("strong:last-child").html());
        var area_code = $(this).find(".phone").attr("area");
        if(age < max && age > min){
            if (new RegExp(categories.join('|')).test(position) || new RegExp(categories.join('|')).test(area_code)){ //... include multiple text check
                $(this).show();   
            }else{
                $(this).hide();
            }
        }else{
            $(this).hide();
        }
        
        if($(this).css("display") != "none") {
            match_count ++ ;
        }
        
    })
    $("#matches").html(match_count);
}