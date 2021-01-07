import React from 'react';
const Jambo = (props) => {
    return(
        <div>
        <div class="jumbotron jumbotron-fluid content-2">
        <div class="container">
          <div className="row">
            <div className="col-6">
              <h1 class="display-4"> {props.header} </h1>
                <p class="lead">{props.message}</p>
                <a  class="btn btn-dark " href="https://github.com/LitHaxor/CGPA-Calculator-Bangladesh">Contribute to GitHub</a>
                <a href="/compare" class="btn btn-info ">Compare CGPA</a>
            </div>
            <div className="col-6">
              <img src="./assets/pics/undraw_Calculator_0evy.svg" alt="" height="400px" className="flex-img img-fluid justify-content-center align-items-flex-end"/>          
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Jambo;