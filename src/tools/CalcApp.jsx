import React from 'react';
import $ from 'jquery';
import Chart from "chart.js";

class CalcApp extends React.Component {
   chartRef = React.createRef();
    componentDidMount(){
        var $oBox = $('.outer-box');
        var $gpa = $('#gpa');
        var $credit = $('#credit');
        let cr=[];
        let cg=[];
        var $result = $('.result').hide();
        
        $('.btnc').click(function() {
          $('.block').last().clone().children().val("").parent().appendTo($('.inner-box'));
        });
        
        $oBox.on('keyup', '.units', function() {
        
          $gpa.text(getTotal());
        });
        $oBox.on('keyup', '.units', function() {
        
          $credit.text(getcredit());
        });
        
        
        $oBox.on("change", ".grade-select", function() {
          $gpa.text(getTotal());
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
          updateChart();
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
            }
          });
        
          return  (point/credits).toFixed(2);
        }
        
          
        
        function getcredit() {
          var credits = 0;
          credits = credit;
          $(".units").each(function() {
            var $this = $(this);
            if(!isNaN($this.val()) && !isNaN($this.parent().find('.grade-select').val())) {
              credits += parseFloat($this.val() || 0)
            }
          });
          return  (credits);
        }
        
        function updateMax()
        {
          let sum_cr=0;
          for(var i=0; i< cr.length ; i++)
            sum_cr = (cr[i]); 
          let total_gr = ((sum_cr-credit)*4) + (points * credit);
          return((total_gr)/sum_cr).toFixed(2);

        }
        $(".btnc").on("click", function () {
          
           
            return false;
        });
        let max=[];
        
        const myChartRef = this.chartRef.current.getContext('2d');
        const chart=new Chart(myChartRef, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: cr,
                datasets: [{
                    label: 'Your CGPA',
                    legend: 'Credit',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: cg,
                },
                {
                    label: 'Max CGPA',
                    backgroundColor: 'rgb(0, 99, 255)',
                    borderColor: 'rgb(0, 99, 255)',
                    data: max, 
                    type: 'line'
                },
              ]
            },
            
            // Configuration options go here
            options: {}
        });
        
    
        
        function updateChart ()
        {
          cg.push(getTotal());
          cr.push(getcredit());
          max.push(updateMax());
          chart.update();
        }
        
    }
    render() {
        return(
            <div>
            <div className="outer-box container content-2"> 
            <div className="card content-2">
                   <div className="card-header bg-primary"><h3 className="text-white">Completed Semester</h3></div>
                   <div className="card-body">
                      <div className="row">
                          <div className="input-group col" >
                              <div className="input-group-prepend"><span className="input-group-text ">CGPA</span></div><input className="form-control col cgpa" type="text" name="CGPA"  placeholder="Enter CGPA"/>
                              <div className="input-group-append"></div>
                          </div>
                          <div className="input-group col" >
                              <div className="input-group-prepend"><span className="input-group-text ">Credit</span></div><input className="form-control col tcredit" type="text" name="credit"  placeholder="Completed Credits"/>
                              <div className="input-group-append"></div>
                          </div>
                      </div>
                   </div>
               </div>
               <div className="card content-3">
                       <div className="card-header bg-info"> <h3 className="text-white">Current Semester</h3> </div>
                       <div className="card-body">
                          <div className="inner-box">
                          <div className="form-group block row " >
                                  <div className="input-group-prepend"><span className="input-group-text d-none d-md-block" >Course</span></div><input className="form-control course col-3" type="text" placeholder="Course Name"/>
                                  <div className="input-group-append"></div>
                                  
                                  <div className="input-group-prepend"><span className="input-group-text" >Credit</span></div><input className="form-control units col-3"  type="text" placeholder="Credit"/>
                                  <div className="input-group-append"></div>
                             
                              <select className="grade-select badge-danger col-3" >
                                  <option value="" selected="">Select Grade</option>
                              
                                   {
                                       this.props.points.map((point,i)=>(
                                           <option value={point}>{this.props.grades[i]}</option>
                                       ))
                                   }
                                    

                                 
                              </select>                                        
                          </div>
                       </div>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="btn btnc btn-primary col-4">+ Add Course</div>
                          <div className="btn btn-success col-4">CGPA <span className="badge badge-danger" id="gpa">0.0</span></div>
                          <div className="btn btn-info col-4">Credit <span className="badge badge-danger" id="credit">0</span></div>
                      </div>
                  </div>
                 
              </div> 
            
              <div className="card content-3">
                    <div className="card-header bg-danger"><h3 className="text-white">Performance Statistics <span className="badge badge-warning">BETA</span></h3></div>
                    <div className="card-body">
                        <canvas id="mychart" ref={this.chartRef}></canvas>
                    </div>
              </div>
              </div> 
        </div>
        )
    }

}
 export default CalcApp;

