$('#hero .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#hotManga .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


// notification
const icon = document.querySelector('.notification_icon');
icon.addEventListener('click', () => {
    const notifyCount = document.querySelector('.notify_count');
    notifyCount.innerText = 0;

    const notifyBox = document.querySelector('.notify_box');
    notifyBox.classList.toggle('d-none');
    notifyBox.classList.toggle('d-block');
});