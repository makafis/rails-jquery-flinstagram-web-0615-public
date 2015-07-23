// Add your JavaScript here
$(document).ready(function(){

$(".bottom-content").on('click', '.like-btn', function(){
  // debugger;
      event.preventDefault();
      event.stopPropagation();
    
      var url = this.parentElement.getAttribute('href');
      var method = this.parentElement.getAttribute('data-method');
      // debugger;
      $.ajax({
        method: method,
        url: url,
        dataType: 'script'
        // data: {id: picture_id}
      });
  });
});



 // $btns.removeClass("active");
 // $(this).addClass("active");


 // $(this.children[0]).removeClass('red-heart')
  // $(this.children[0]).addClass('grey-heart');