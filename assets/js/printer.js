function printDiv(el){
  var restorepage = $('body').html();
  var printcontent = $('#' + el).clone();
  var enteredtext = $('#text').val();
  $('body').empty().html(printcontent);
  window.print();
  $('body').html(restorepage);
  $('#text').html(enteredtext);
  }



  $(".reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});

