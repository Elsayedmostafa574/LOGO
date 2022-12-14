const counters = document.querySelectorAll('.counter');
const speed = 2000;

counters.forEach(counter=>{
    const UpdateCount = ()=> {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(UpdateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    UpdateCount();
});
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
  });
  $(window).scroll(function () {
    let x = $(window).scrollTop()
    if (x > 500) {
      $('.navbar').css({
        'opacity': '0.8',
        'background': 'black',

      })
    } else {
      $('.navbar').css({
        'background': 'transparent',
        
      })
    }
  })
  new WOW().init();