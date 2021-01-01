import React from 'react';
import $ from 'jquery';

class CompareApp extends React.Component 
{
    componentDidMount()
    {
        var id1,id0,grades;




   
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
            
             grades = 0;
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
              else if(marks <= 69 && marks >=67){
                return grades = 1.3;
              }
              else if(marks < 67 && marks >=65){
                return grades = 1.0;
              }
              else {
               return grades = 0;
              }   
          }
          /**For IUB */
          if( id === 3 && !isNaN(marks))
          {
            alert("Iub grade is not finalized");
             grades = 0;
            if (marks <= 100 && marks >= 90 ){
               return grades = 4.0;
              }
              else if(marks <= 89 && marks >= 80){
                  return grades = 3.7;
              }
              else if(marks <= 75 && marks >=79){
                  return grades = 3.3;
              }
              else if(marks <= 74 && marks >=70){
                return grades = 3.0;
              }
              else if(marks <= 69 && marks >=65){
                return grades = 2.7;
              }
              else if(marks <= 64 && marks >=60){
              return grades = 2.3;
              }
              else if(marks <= 59 && marks >= 55){
                return grades = 2.0;
              }
              else if(marks <= 50 && marks >=54){
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
        
          /**For UIU */
          if( id === 4 && !isNaN(marks))
          {
            
             grades = 0;
            if (marks <= 100 && marks >= 90 ){
               return grades = 4.0;
              }
              else if(marks <= 89 && marks >= 86){
                  return grades = 3.67;
              }
              else if(marks <= 85 && marks >=82){
                  return grades = 3.33;
              }
              else if(marks <= 81 && marks >=78){
                return grades = 3.0;
              }
              else if(marks <= 77 && marks >=74){
                return grades = 2.67;
              }
              else if(marks <= 73 && marks >=70){
              return grades = 2.33;
              }
              else if(marks <= 69 && marks >= 66){
                return grades = 2.0;
              }
              else if(marks <= 65 && marks >=62){
                return grades = 1.67;
              }
              else if(marks < 61 && marks >=58){
                return grades = 1.33;
              }
              else if(marks < 57 && marks >=55){
                return grades = 1.0;
              }
              else {
               return grades = 0;
              }   
          }
        
        
          /**For Public universities */
          if( id === 5 && !isNaN(marks))
          {
            
             grades = 0;
            if (marks <= 100 && marks >= 80 ){
               return grades = 4.0;
              }
              else if(marks <= 79 && marks >= 75){
                  return grades = 3.75;
              }
              else if(marks <= 74 && marks >=70){
                  return grades = 3.50;
              }
              else if(marks <= 69 && marks >=65){
                return grades = 3.25;
              }
              else if(marks <= 64 && marks >=60){
                return grades = 3.00;
              }
              else if(marks <= 59 && marks >=55){
              return grades = 2.75;
              }
              else if(marks <= 54 && marks >= 50){
                return grades = 2.5;
              }
              else if(marks <= 49 && marks >=45){
                return grades = 2.25;
              }
              else if(marks < 44 && marks >=40){
                return grades = 2.00;
              }
              else {
               return grades = 0;
              }   
          }
        
        
          /**For DIU */
          if( id === 6 && !isNaN(marks))
          {
            
             grades = 0;
            if (marks <= 100 && marks >= 80 ){
               return grades = 4.0;
              }
              else if(marks <= 79 && marks >= 75){
                  return grades = 3.75;
              }
              else if(marks <= 74 && marks >=70){
                  return grades = 3.50;
              }
              else if(marks <= 69 && marks >=65){
                return grades = 3.25;
              }
              else if(marks <= 64 && marks >=60){
                return grades = 3.00;
              }
              else if(marks <= 59 && marks >=55){
              return grades = 2.75;
              }
              else if(marks <= 54 && marks >= 50){
                return grades = 2.5;
              }
              else if(marks <= 49 && marks >=45){
                return grades = 2.25;
              }
              else if(marks < 44 && marks >=40){
                return grades = 2.00;
              }
              else {
               return grades = 0;
              }   
          }
          /**For AUST */
          if( id === 7 && !isNaN(marks))
          {
            
             grades = 0;
            if (marks <= 100 && marks >= 80 ){
               return grades = 4.0;
              }
              else if(marks <= 79 && marks >= 75){
                  return grades = 3.75;
              }
              else if(marks <= 74 && marks >=70){
                  return grades = 3.50;
              }
              else if(marks <= 69 && marks >=65){
                return grades = 3.25;
              }
              else if(marks <= 64 && marks >=60){
                return grades = 3.00;
              }
              else if(marks <= 59 && marks >=55){
              return grades = 2.75;
              }
              else if(marks <= 54 && marks >= 50){
                return grades = 2.5;
              }
              else if(marks <= 49 && marks >=45){
                return grades = 2.25;
              }
              else if(marks < 44 && marks >=40){
                return grades = 2.00;
              }
              else {
               return grades = 0;
              }   
          }
          /**For EWU */
          if( id === 8 && !isNaN(marks))
          {
            
             grades = 0;
            if (marks <= 100 && marks >= 90 ){
               return grades = 4.0;
              }
              else if(marks < 90 && marks >= 87){
                  return grades = 3.7;
              }
              else if(marks < 87 && marks >=83){
                  return grades = 3.30;
              }
              else if(marks < 83 && marks >=80){
                return grades = 3.00;
              }
              else if(marks < 80 && marks >=77){
                return grades = 2.70;
              }
              else if(marks < 77 && marks >=73){
              return grades = 2.3;
              }
              else if(marks < 73 && marks >= 70){
                return grades = 2.0;
              }
              else if(marks <70 && marks >=67){
                return grades = 1.7;
              }
              else if(marks < 67 && marks >=63){
                return grades = 1.3;
              }
              else if(marks < 63 && marks >=60 ) {return grades = 1.0;}
              else {
               return grades = 0;
              }   
          }
          /** For Bracu */
          if( id === 9 && !isNaN(marks))
          {
            
             grades = 0;
            if (marks <= 100 && marks >= 90 ){
               return grades = 4.0;
              }
              else if(marks < 90 && marks >= 85){
                  return grades = 3.7;
              }
              else if(marks < 85 && marks >=80){
                  return grades = 3.30;
              }
              else if(marks < 80 && marks >=75){
                return grades = 3.00;
              }
              else if(marks < 75 && marks >=70){
                return grades = 2.70;
              }
              else if(marks < 70 && marks >=65){
              return grades = 2.3;
              }
              else if(marks < 65 && marks >= 60){
                return grades = 2.0;
              }
              else if(marks <60 && marks >=57){
                return grades = 1.7;
              }
              else if(marks < 57 && marks >=55){
                return grades = 1.3;
              }
              else if(marks < 55 && marks >=52 ) {return grades = 1.0;}
              else if(marks < 52 && marks >=50 ) {return grades = 0.7;}
              else {
               return grades = 0;
              }   
          }
          if( id === 11 && !isNaN(marks))
          {
            
            grades = 0;
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
              else if(marks <= 69 && marks >=67){
                return grades = 1.3;
              }
              else if(marks < 67 && marks >=65){
                return grades = 1.0;
              }
              
             return grades;
                 
          }
        
        }
        
        function getName(id){
          if(id===1){
            return "AIUB";
          }
          else if( id === 2){
            return "NSU";
          }
          else if(id === 3){
            return "IUB";
          }
          else if(id === 4){
            return "UIU";
          }
          else if(id === 5){
            return "Public University";
          }
          else if(id ===6){
            return "DIU";
          }
          else if(id ===7){
            return "AUST";
          }
          else if( id === 8){
            return "EWU";
          }
          else if(id === 9){
            return "BRACU";
          }
          else if(id === 10){
            alert("coming soon");
            return "MIT 5.0 scale";
          }
          else if(id === 11){
            
            return "US 4.0 scale Harvard";
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
              return false;
          });
          
        
        
        
         
    }
    render(){
        return(
            <div className="container content-2">
                <div className="card outer-box">
                    <div className="card-header bg-dark"><h3 className="text-white">Compare CGPA</h3></div>
                    
                    <div className="card-body inner-box">
                        <div className="row ">
                            <div className="col-6">
                                <select name="university" id="university"  className="badge-primary col-6">
                                    <option value="0">Univeristy 1</option>
                                    <option value="1">AIUB</option>
                                    <option value="2">NSU</option>
                                    <option value="3">IUB</option>
                                    <option value="4">UIU</option>
                                    <option value="5">Public Univeristy</option>
                                    <option value="6">DIU</option>
                                    <option value="7">AUST</option>
                                    <option value="8">EWU</option>
                                    <option value="9">BRACU</option>
                                    <option value="10">MIT (5.0 grade)</option>
                                    <option value="11">Harvard (US grade)</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <select name="university2" id="university2"  className="badge-success col-6">
                                    <option value="0">Univeristy 1</option>
                                    <option value="1">AIUB</option>
                                    <option value="2">NSU</option>
                                    <option value="3">IUB</option>
                                    <option value="4">UIU</option>
                                    <option value="5">Public Univeristy</option>
                                    <option value="6">DIU</option>
                                    <option value="7">AUST</option>
                                    <option value="8">EWU</option>
                                    <option value="9">BRACU</option>
                                    <option value="10">MIT (5.0 grade)</option>
                                    <option value="11">Harvard (US grade)</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-body block"> 
                            <div class="btn-group" role="group"></div>
                               <div className="row">   
                                    <div class="input-group-prepend" ><span class="input-group-text badge-info" >Credit</span></div><input class="form-control units  col-3"  type="text" placeholder="credit"/>
                                    <div class="input-group-append"></div>
                                    <div class="input-group-prepend" ><span class="input-group-text badge-danger" >Marks</span></div><input class="form-control grade-select  col-3"  type="text" placeholder="marks" />
                                    <div class="input-group-append"></div>
                               </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <button className="btn btnc btn-primary">+ Add Course</button>
                    </div>
                    <div className="card-body">
                       <div className="row ">
                            <div className="col-4 col-md-3">
                                <div className="card">
                                    <div className="card-header bg-primary"><h5 className="text-white text-center" id="universtyname0">Select University 1</h5></div>
                                    <div className="card-body">
                                        <h5 className="text-dark text-center">GPA</h5>
                                        <h2 className="text-danger text-center" id="gpa">0.0</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="card">
                                    <div className="card-header bg-success"><h5 className="text-white text-center" id="universtyname0">Completed Credit</h5></div>
                                    <div className="card-body">
                                        <h5 className="text-dark text-center">Credit</h5>
                                        <h2 className="text-danger text-center" id="credit">0</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="card">
                                    <div className="card-header bg-info"><h5 className="text-white text-center" id="universtyname1">Select University 2</h5></div>
                                    <div className="card-body">
                                        <h5 className="text-dark text-center">GPA</h5>
                                        <h2 className="text-danger text-center" id="gpa2">0.0</h2>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompareApp;