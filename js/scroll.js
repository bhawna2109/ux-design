// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    if(st < 60){
          $('header').css("box-shadow", "none")
    }

    if(st > 60){
      $('header').css("box-shadow", "0 0 10px rgba(0,0,0,0.4)")
}

    console.log(st);
    
    lastScrollTop = st;
}



// ===> sidenav scroll
var mainNavLinks = document.querySelectorAll("#side-nav ul li a");
var mainSections = document.querySelectorAll("main article section");
console.log(mainNavLinks);
console.log(mainSections);

var lastId;
var cur = [];
var current_section = 1;
var curr_index = 0;
var flag = 0;


window.addEventListener("scroll", event => {
    if(flag == 0){
        var fromTop = window.scrollY;  
        console.log(fromTop);
        mainNavLinks.forEach(link => {
            var section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop + 10 &&
                section.offsetTop + section.offsetHeight > fromTop + 10
            ) {
                link.classList.add("current");
                current_section = document.querySelector(".current");
                console.log(current_section);
                console.log(link);
                console.log(link.hash);
                console.log(section);
            } else {
                link.classList.remove("current");
            }

        });
    }

  });


// ===>Keyboard navigation
document.addEventListener(
    'keydown', function(e){
        console.log()
        console.log(e);

        if(e.key == "j"){
            flag = 1;
            setTimeout(function() { flag = 0, console.log("flag=00") }, 1000);
            console.log("pressed j");
            curr_index = current_section.dataset.index;
            console.log(parseInt(curr_index));

            if(curr_index < $(".sec").length -1){
                curr_index = parseInt(curr_index) + 1;
                
                mainNavLinks.forEach(link => {
                    var section = document.querySelector(link.hash);
                
                    if (section.dataset.index == curr_index) {
                        link.classList.add("current");
                        current_section = document.querySelector(".current");
                        console.log(current_section);
                        console.log(section);
                        window.location.href = link.hash;
                    }
                    else {
                        link.classList.remove("current");
                    }
                });
            }
        }

        if(e.key == "k"){
            flag = 1;
            setTimeout(function() { flag = 0, console.log("flag=00") }, 1000);
            console.log("pressed k");
            curr_index = current_section.dataset.index;
            console.log(parseInt(curr_index));

            if(curr_index > 1){
                curr_index = parseInt(curr_index) - 1;
                
                mainNavLinks.forEach(link => {
                    var section = document.querySelector(link.hash);
                
                    if (section.dataset.index == curr_index) {
                        link.classList.add("current");
                        current_section = document.querySelector(".current");
                        console.log(current_section);
                        console.log(section);
                        window.location.href = link.hash;
                    }
                    else {
                        link.classList.remove("current");
                    }
                });
            }
        }


    }
)

// document.addEventListener(
//     'keyup', function(e){
//         // setInterval(function(){flag = 0, console.log("flag=00")}, 12000);
//         setTimeout(function() { flag = 0, console.log("flag=00") }, 10000);
//         console.log("key is up");
// })


// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();  
//   });


//=======> Protip appear disappear
$("#side-nav").mouseover(function(){
    $("#keyboard").css("display", "block");
})

$("#side-nav").mouseleave(function(){
    $("#keyboard").css("display", "none");
})

$("#side-nav").focus(function(){
    $("#keyboard").css("display", "block");
})

$("#side-nav").blur(function(){
    $("#keyboard").css("display", "none");
})


// video playback 

// var vid = document.getElementById("video1");
// vid.playbackRate = 1.5;

var vids = document.getElementsByClassName("video-style");
var i;
for (i = 0; i < vids.length; i++) {
  vids[i].playbackRate = 1.5;
}