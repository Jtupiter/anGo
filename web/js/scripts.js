// Load scripts after page loads
$(document).ready(function(){
  $(document).ready(function(){
      $('.tiles').click(function(){
        $('.tiles').toggleClass('closed');
        $('.item-info').toggleClass('open');
      });

      $('.item-info .close').click(function(){
        $('.tiles').toggleClass('closed');
        $('.item-info').toggleClass('open');
      });
    });
});