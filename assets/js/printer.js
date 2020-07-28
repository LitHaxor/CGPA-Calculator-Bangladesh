function printDiv(el){
  var restorepage = $('body').html();
  var printcontent = $('#' + el).clone();
  var enteredtext = $('#text').val();
  $('body').empty().html(printcontent);
  window.print();
  $('body').html(restorepage);
  $('#text').html(enteredtext);
  }


  function resetDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
  
    document.body.innerHTML = originalContents;
  }