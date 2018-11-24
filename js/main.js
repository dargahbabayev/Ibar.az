$(document).ready(function () {
    var owl = $("#index__slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000, //5sec
        items: 1,
        // autoplay:true,
        dotClass: "owl-dot slider__dots",
        dotsClass: "dots__div owl-dots",
        // animateIn:"animated rollIn"/true,
        // animateOut:"animated rollIn"/true,
    });

    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item
        $('#item__photo--img').removeClass('animated rollIn');
        $('.owl-item').not('.cloned').eq(item).find('#item__photo--img').addClass('animated rollIn');
    });
});

// CURRENCY API
// $(document).ready(function(){
//     $.get("https://azn.today/api/suggestion", function(response, status){
//         // alert("Data: " + data + "\nStatus: " + status);
//     //   $("#data").text(response.ibar.buy.name);
//     console.log(status);
//     });


// });

$(document).ready(function () {

    var div = $(".body .up");
    $(".navigator_left_list li a").click(function () {
        //to find which "a" clicked
        var id = $($(this)).attr("data-id");
        var num = $(".number");
        for (i = 0; i < num.length; i++) {
            num[i].className = num[i].className.replace("active");
        }

        if (id === "ferdi") {

            $(".wrap .ferdi").addClass("active animated fadeIn");

        }
        else if (id === "krprtv") {
            $(".wrap .krprtv").addClass("active animated fadeIn");
        }
        else if (id === "invstr") {
            $(".wrap .invstr").addClass("active animated fadeIn");
        }
        else if (id === "mly") {
            $(".wrap .mly").addClass("active animated fadeIn");
        }



        div.addClass("animated fadeOutUp")
            .hide('slow');
        // div.css({display:'none'});
        $(".wrap").css({ display: "block" });
    });


});

// for click search event 
$(document).ready(function () {
    $("#seach__input__help").click(function () {
        $(".up .example").addClass("example__click");
        $(".search__box--quest").addClass('search__box--quest--click');
    });
    $(document).click(function (e) {
        e.preventDefault();
        if ($(e.target).is('#seach__input__help')) {
        } else {
            $(".up .example").removeClass("example__click");
            $(".search__box--quest").removeClass('search__box--quest--click');
        }
    });
});

//for mobile menu "div"
$(document).ready(function(){
$(".mobile__icon--bars__div").click(function(){
//  $(".body .up").css({ display: "none" });
//  $(".mobile__wrap").css({display:"block"});

$(".mobile__wrap").css({
    right: 0
});
});

$(".mobile__wrap__close").click(function(){
    $(".mobile__wrap").css({
        right: ''
    });
    

});


});