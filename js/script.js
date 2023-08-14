
// press on open to open navbar 
$('.options i').click(function(){
$('.options').css({left:`0px`,transition:'all 1s'})

})

// press on x to close 
$('.closebtn').click(function(){
    let boxWidth=$('.optionsSide').outerWidth()
  $('.options').css({left:`-${boxWidth}px`,transition:'all 1s'})
  
})

// scroll in nav
$('.nav_link').click(function(){
    let clickLink=$(this).attr('href')
console.log(clickLink)
    let sectionTop=$(clickLink).offset().top 
    $('thml,body').animate({
        scrollTop:sectionTop
    },1000)
})


    // slide down   
$('.slidDown .parts').click(function(){
    $('.innerText').not($(this).next()).slideUp();
    $(this).next().slideToggle();
})


// count down time 

let countDownDate = new Date("decamber 12, 2024 12:0:0").getTime();

function countdownTime() {
let now = new Date().getTime();

let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ seconds} s`)
}

    setInterval(countdownTime, 1000);



// typing in teaxt area

    $('textarea').keyup(function() {
        let characternumber =100 ;
      let length = $(this).val().length;
      let total = characternumber-length;
      if(total<=0)
                {
                     $(".text").text("your available character finished");
                    
                }
            else{
            
            $(".text").html(`<span class="counter text-danger">${total}</span> Characyer Reamining`);
            }
    });
    
    