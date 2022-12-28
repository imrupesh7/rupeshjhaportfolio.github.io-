var typed = new Typed(".auto-input", {
    strings: [, "Web-Designer", "Web-Developer", "Graphics-Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


$(document).ready(function () {

    $("#allwork").click(function () {
        $("img[alt!='insta']").fadeIn();

        $(".web").fadeIn();
        $(".graphphici").fadeIn();
        $(".logopost").fadeIn();
        $(".instapost").fadeIn();
    });



    $("#rupesh").click(function () {
        $("img[alt!='insta']").fadeIn();

        $(".web").fadeOut();
        $(".graphphici").fadeOut();
        $(".logopost").fadeOut();
        $(".instapost").fadeIn();
    });

    $("#website").click(function () {
        $("img[alt!='webui']").fadeIn();

        $(".instapost").fadeOut();
        $(".graphphici").fadeOut();
        $(".logopost").fadeOut();
        $(".web").fadeIn();
    });

    $("#graphic").click(function () {
        $("img[alt!='graph']").fadeIn();

        $(".instapost").fadeOut();
        $(".web").fadeOut();
        $(".logopost").fadeOut();
        $(".graphphici").fadeIn();
    });

    $("#logo").click(function () {
        $("img[alt!='logo']").fadeIn();

        $(".instapost").fadeOut();
        $(".web").fadeOut();
        $(".graphphici").fadeOut();
        $(".logopost").fadeIn();
    });


});


// $(document).ready(function(){
// $('#allwork').click(function(){
//     $('.image').show();
// });

// $('#website').click(function(){
//     $('.image').show();
// });


// });


// night to day 

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-t");
    if (document.body.classList.contains("dark-t")) {
        icon.src = "img/moon-solid.png";
    } else {
        icon.src = "img/sun-solid.png"
    }

}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.scroll').fadeIn();
        }
        else {
            $('.scroll').fadeOut();
        }
    })
});

$('.scroll').click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$(document).ready(function () {
    $("a[href^='#']").click(function (e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
        var mypos = position - 100;

        $("body,html").animate({
            scrollTop: mypos
        }, 400);
    });

});


var menu = document.querySelector("#fa-bars");
var header = document.querySelector("header nav ul");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("menujs");
}



function sendMail() {
    var firstName = $('#sname').val();
    var email = $('#smail').val();
    var phone = $('#sphone').val();
    var message = $('#query').val();
    window.location.href = `mailto:rupeshjha7796@gmail.com?subject=New message from rupesh-portfolio\'s contact form&body=Name : ${firstName}     %0D%0A Email : ${email}%0D%0A Mobile No : ${phone}%0D%0A Message : ${message}`;



    window.location.href = "thanks.html";

};