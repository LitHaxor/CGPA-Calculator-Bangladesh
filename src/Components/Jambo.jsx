import React from 'react';
const Jambo = (props) => {
    return(
        <div>
        <div class="jumbotron jumbotron-fluid content-2">
        <div class="container">
          <h1 class="display-4"> {props.header} </h1>
          <p class="lead">{props.message}</p>
          <div className="row">
          <a  class="btn btn-dark " href="https://github.com/LitHaxor/CGPA-Calculator-Bangladesh">Contribute to GitHub</a>
          <a href="/" class="btn btn-info ">Compare CGPA</a>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Jambo;