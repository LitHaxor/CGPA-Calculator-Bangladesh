var id1,id0;




   
function getGrade(id, marks) {
  /**For aiub */
  if(id === 0 ){
    alert("You must select a university!");
  }
  if( id === 1 && !isNaN(marks)){
    
    /**for aiub **/
    if (marks <= 100 && marks >= 90 ){
       return grades = 4.0;
      }
      else if(marks < 90 && marks >=85){
          return grades = 3.75;
      }
      else if(marks < 85 && marks >=80){
          return grades = 3.5;
      }
      else if(marks < 80 && marks >=75){
        return grades = 3.25;
      }
      else if(marks < 75 && marks >=70){
        return grades = 3.00;
      }
      else if(marks < 70 && marks >=65){
      return grades = 2.75;
      }
      else if(marks < 65 && marks >=60){
        return grades = 2.50;
      }
      else if(marks < 60 && marks >=50){
        return grades = 2.25;
      }
      else {
       return grades = 0;
      }
      
  }
  /** For NSU  */
  if( id === 2 && !isNaN(marks))
  {
    
    var grades = 0;
    if (marks <= 100 && marks >= 93 ){
       return grades = 4.0;
      }
      else if(marks <= 92 && marks >=90){
          return grades = 3.7;
      }
      else if(marks <= 89 && marks >=87){
          return grades = 3.3;
      }
      else if(marks <= 86 && marks >=83){
        return grades = 3.0;
      }
      else if(marks <= 82 && marks >=80){
        return grades = 2.7;
      }
      else if(marks <= 79 && marks >=77){
      return grades = 2.3;
      }
      else if(marks <= 76 && marks >= 73){
        return grades = 2.0;
      }
      else if(marks <= 70 && marks >=72){
        return grades = 1.7;
      }
      else if(marks < 69 && marks >=67){
        return grades = 1.7;
      }
      else if(marks < 72 && marks >=70){
        return grades = 1.3;
      }
      else if(marks < 67 && marks >=69){
        return grades = 1.0;
      }
      else {
       return grades = 0;
      }   
  }
  /**For IUB */

  /**For UIU */

  /**For Public universities */

  /**For DIU */

  /**For AUST */

  /**For EWU */

  /** For Bracu */

}

function getName(id){
  if(id===1){
    return "AIUB";
  }
  else if( id === 2){
    return "NSU";
  }
  else {
    return "Select University!";
  }
}
   


  var $oBox = $('.outer-box');
  var $gpa = $('#gpa');
  var $credit = $('#credit');
  var $gpa2 = $('#gpa2')
  var $result = $('.result').hide();
  

  $('#university').on('change', function() {
    id0 = this.value;
    
    $credit.text(getcredit());
    $gpa.text(getTotal());
    $gpa2.text(getTotal2());
    $('#universtyname0').text(getName(parseInt(id0)));
  });

  $('#university2').on('change', function() {
    id1 = this.value;
    $credit.text(getcredit());
    $gpa2.text(getTotal2());
    $('#universtyname1').text(getName(parseInt(id1)));
  });
  
  $('.btnc').click(function() {
    $('.block').last().clone().children().val("").parent().appendTo($('.inner-box'));
  });
  
  $oBox.on('keyup', '.units', function() {
    $gpa.text(getTotal());
    $gpa2.text(getTotal2());
  });
  $oBox.on('keyup', '.units', function() {
    $credit.text(getcredit());
  });
  
  
  $oBox.on("change", ".grade-select", function() {
    $gpa.text(getTotal());
    $gpa2.text(getTotal2());
    $result.is(":hidden") && $result.show();
  });
  $oBox.on("change", ".grade-select", function() {
    $credit.text(getcredit());
    $result.is(":hidden") && $result.show();
  });
  
  
  
  
  function getTotal() {
  var marks =0;
  var point =0.0;
  var credits =0;
    $(".units").each(function() {
      var $this = $(this);
  
      if(!isNaN($this.val()) ) {
        marks = parseFloat($this.parent().find('.grade-select').val() || 0);
        console.log("id, marks:  " + id0 + " " + marks );
        var grade = getGrade(parseInt(id0), parseInt(marks) );
        console.log("grade: " + grade);
        point += parseFloat($this.val() || 0) * grade;
        credits += parseFloat($this.val() || 0)
      }
    });
    return  (point/credits).toFixed(2);
  }
  function getTotal2() {
    var marks =0;
    var point =0.0;
    var credits =0;
    
      
      $(".units").each(function() {
        var $this = $(this);
    
        if(!isNaN($this.val()) ) {
          marks = parseFloat($this.parent().find('.grade-select').val() || 0);
          console.log("id, marks:  " + id1 + " " + marks );
          var grade = getGrade(parseInt(id1), parseInt(marks) );
          console.log("grade: " + grade);
          point += parseFloat($this.val() || 0) * grade;
          credits += parseFloat($this.val() || 0)
        }
      });
      return  (point/credits).toFixed(2);
  }
  
  function getcredit() {
  var credits =0;
    $(".units").each(function() {
      var $this = $(this);
      if(!isNaN($this.val()) ) {
        credits += parseFloat($this.val() || 0)
      }
    });
    return  (credits);
  }
  
  $(".btnc").on("click", function () {
    
      $('html, body').animate({scrollTop:$(document).height()}, 'slow');
      return false;
  });
  



  $(document).ready(function(){
    $('select').formSelect();
  });