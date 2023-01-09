
$(document).ready(function() {
    $("#owl-example").owlCarousel({
      items :3,
      navigation: true,
      
      pagination: true,
      responsive :true,
     autoPlay: true,
    });
  });

var Portfolio = {
  sort: function(items) {
      items.show();
      $('#portfolio-content').find('div.portfolio-item').not(items).fadeOut(500);
  },
  showAll: function(items) {
      items.fadeIn(500);
  },
  doSort: function() {
      $('a', '#portfolio-sort').on('click', function() {
          var $a = $(this);
          if (!$a.is('#all')) {
              var items = $('div[data-cat=' + $a.data('cat') + ']', '#portfolio-content');
              Portfolio.sort(items);
          } else {
              Portfolio.showAll($('div.portfolio-item', '#portfolio-content'));
          }
      });
  }
};

Portfolio.doSort();

var all = document.getElementById("all")
var brand = document.getElementById("brand")
var work = document.getElementById("work")
var web = document.getElementById("web")

function myFunction() {
  all.classList.remove("active");
  brand.classList.remove("active");
  work.classList.remove("active");
  web.classList.remove("active");
  
  

}