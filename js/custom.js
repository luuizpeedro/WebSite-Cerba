// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.addEventListener("DOMContentLoaded", function() {
    var carouselPrev = document.querySelector('.carousel-control-prev');
    var carouselNext = document.querySelector('.carousel-control-next');
    
    carouselPrev.addEventListener('click', function() {
      $('#customCarousel1').carousel('prev');
    });
  
    carouselNext.addEventListener('click', function() {
      $('#customCarousel1').carousel('next');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
      if (link.href === currentLocation) {
        link.classList.add('active');
      }
    });
  });

  function toggleServiceContent(element) {
    const allItems = document.querySelectorAll('.service-item');
    allItems.forEach(item => {
      if (item !== element) {
        item.querySelector('.service-content').style.maxHeight = '0';
        item.classList.remove('active');
      }
    });
  
    const content = element.querySelector('.service-content');
    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
      content.style.maxHeight = content.scrollHeight + 'px';
      element.classList.add('active');
    } else {
      content.style.maxHeight = '0';
      element.classList.remove('active');
    }
  }
  