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
});