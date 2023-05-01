(function($) {

  "use strict";

  // init Chocolat light box
  var initChocolat = function() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  var initCharts = function() {

    if ($(".chart")[0]){
    
      var barColors = [
        "#FF8FE4",
        "#FF6076",
        "#EB0D0D",
        "#FF8401",
        "#FFF40E",
        "#53FF0E",
        "#0EF4FF",
        "#0E5EFF",
        "#C560FF"
      ];

      new Chart("Lunes", {
        type: "doughnut",
        data: {
          labels: ['10 am','11 am','12 am','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm'],
          datasets: [{
            backgroundColor: barColors,
            data: [6,11,14,16,16,14,11,8,4]
          }]
        },
        options: {
          plugins: {
            legend: false,
            tooltip: false,
          },
          title: {
            display: false,
            text: "Lunes"
          }
        }
      });

      new Chart("Martes", {
        type: "doughnut",
        data: {
          labels: ['10 am','11 am','12 am','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm'],
          datasets: [{
            backgroundColor: barColors,
            data: [6,10,16,16,14,14,10,8,6]
          }]
        },
        options: {
          plugins: {
            legend: false,
            tooltip: false,
          },
          title: {
            display: false,
            text: "Martes"
          }
        }
      });

      new Chart("Miercoles", {
        type: "doughnut",
        data: {
          labels: ['10 am','11 am','12 am','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm'],
          datasets: [{
            backgroundColor: barColors,
            data: [7,13,15,14,13,13,11,8,6]
          }]
        },
        options: {
          plugins: {
            legend: false,
            tooltip: false,
          },
          title: {
            display: false,
            text: "Miercoles"
          }
        }
      });

      new Chart("Jueves", {
        type: "doughnut",
        data: {
          labels: ['10 am','11 am','12 am','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm'],
          datasets: [{
            backgroundColor: barColors,
            data: [7,13,15,15,13,13,12,7,5]
          }]
        },
        options: {
          plugins: {
            legend: false,
            tooltip: false,
          },
          title: {
            display: false,
            text: "Jueves"
          }
        }
      });

      new Chart("Viernes", {
        type: "doughnut",
        data: {
          labels: ['10 am','11 am','12 am','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm'],
          datasets: [{
            backgroundColor: barColors,
            data: [7,12,15,15,12,12,12,10,5]
          }]
        },
        options: {
          plugins: {
            legend: false,
            tooltip: false,
          },
          title: {
            display: false,
            text: "Viernes"
          }
        }
      });

      new Chart("Sabado", {
        type: "doughnut",
        data: {
          labels: ['10 am','11 am','12 am','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm'],
          datasets: [{
            backgroundColor: barColors,
            data: [4,8,12,14,18,18,14,8,4]
          }]
        },
        options: {
          plugins: {
            legend: false,
            tooltip: false,
          },
          title: {
            display: false,
            text: "Sábado"
          }
        }
      });

      new Chart("Domingo", {
        type: "doughnut",
        data: {
          labels: ['10 am','11 am','12 am','13 pm','14 pm','15 pm','16 pm','17 pm','18 pm'],
          datasets: [{
            backgroundColor: barColors,
            data: [6,10,12,14,16,16,12,10,4]
          }]
        },
        options: {
          plugins: {
            legend: false,
            tooltip: false,
          },
          title: {
            display: false,
            text: "Domingo"
          }
        }
      });
    }
  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  /*var initScrollNav = function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
          $('.site-header').addClass("bg-dark");
        }else{
          $('.site-header').removeClass("bg-dark");
        }
    });
  }*/

  $(document).ready(function () {

    // preloader
    $(window).load(function() {
      $("#overlayer").fadeOut("slow");
      $('body').addClass('loaded');
    })

    //initScrollNav();
    initChocolat();
    initCharts();
    initJarallax();

    // Animate on Scroll
    AOS.init({
      duration: 600,
      once: true,
    })
  });


})(jQuery);
