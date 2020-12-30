var $oBox = $('.outer-box');
var $gpa = $('#gpa');
var $credit = $('#credit');
var cr=[];
var cg=[];
var $result = $('.result').hide();

$('.btnc').click(function() {
  $('.block').last().clone().children().val("").parent().appendTo($('.inner-box'));
});

$oBox.on('keyup', '.units', function() {
  updateChart();
  $gpa.text(getTotal());
});
$oBox.on('keyup', '.units', function() {
  updateChart();
  $credit.text(getcredit());
});


$oBox.on("change", ".grade-select", function() {
  $gpa.text(getTotal());
  updateChart();
  $result.is(":hidden") && $result.show();
});
$oBox.on("change", ".grade-select", function() {
  $credit.text(getcredit());
  updateChart();
  $result.is(":hidden") && $result.show();
});

var points =0;
var credit = 0;
var ptr=0;
$(".cgpa").on("keyup",function(){
  points = parseFloat($('.cgpa').val() || 0);
  $gpa.text(getTotal());
  $credit.text(getcredit());
});
$('.tcredit').on("keyup", function(){
  credit = parseFloat($('.tcredit').val() || 0);
  ptr = points*credit;
  $gpa.text(getTotal());
  $credit.text(getcredit());

})
$('.tcredit').on("change", function(){
  credit = parseFloat($('.tcredit').val() || 0);
  ptr = points*credit;
  $gpa.text(getTotal());
  $credit.text(getcredit());
})
$('.cgpa').on("change", function(){
  points = parseFloat($('.cgpa').val() || 0);
  ptr = points*credit;
  $gpa.text(getTotal());
  $credit.text(getcredit());
})





function getTotal() {
  
  var credits = 0;
  var point =0;
  point = ptr;
  credits = credit;
  
  $(".units").each(function() {
    var $this = $(this);
    if(!isNaN($this.val()) && !isNaN($this.parent().find('.grade-select').val())) {
      point += parseFloat($this.val() || 0) * parseFloat($this.parent().find('.grade-select').val() || 0);
      credits += parseFloat($this.val() || 0);
      cg.push(parseFloat($this.val() || 0) * parseFloat($this.parent().find('.grade-select').val() || 0));
      cr.push(parseFloat($this.val() || 0));
    }
  });
  return  (point/credits).toFixed(2);
}

function getcredit() {
  var credits = 0;
  var point =0;
  point = points;
  credits = credit;
  $(".units").each(function() {
    var $this = $(this);
    if(!isNaN($this.val()) && !isNaN($this.parent().find('.grade-select').val())) {
      point += parseFloat($this.val() || 0) * parseFloat($this.parent().find('.grade-select').val() || 0);
      credits += parseFloat($this.val() || 0)
      cg.push(parseFloat($this.val() || 0) * parseFloat($this.parent().find('.grade-select').val() || 0));
      cr.push(parseFloat($this.val() || 0));
    }
  });
  return  (credits);
}

$(".btnc").on("click", function () {
  
   
    return false;
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: getcredit(),
        datasets: [{
            label: 'CGPA',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: cg,
        }]
    },

    // Configuration options go here
    options: {}
});


function updateChart ()
{
  chart.data.datasets[0].data = cg;
  chart.update();
}