// Load scripts after page loads
$(document).ready(function(){
  $(document).ready(function(){
      $('.tiles .image').click(function(){
        $('.tiles').toggleClass('closed');
        $('.item-info').toggleClass('open');
      });

      $('.item-info .close').click(function(){
        $('.tiles').toggleClass('closed');
        $('.item-info').toggleClass('open');
      });
    
      $('.details .close').click(function(){
        $(this).parents('li').addClass('foldIn');
      });
    });
});

$(document).ready(function(){
  $(".optionbar div.icon").click(function(){
    $(".select").show();
  });
<<<<<<< HEAD
}); 
=======
}); 
>>>>>>> eaea8f59183f06ad73a5169f6ab54fdcfcc95728
