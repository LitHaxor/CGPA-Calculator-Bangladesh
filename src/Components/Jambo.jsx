import React from 'react';

const Jambo = (props) => {
    return(
        <div>
        <div class="jumbotron jumbotron-fluid content-2">
        <div class="container">
          <h1 class="display-4"> {props.header} </h1>
          <p class="lead">{props.message}</p>
          <button type="button" class="btn btn-dark">Contribute GitHub</button>
          <button type="button" class="btn btn-info">Compare CGPA</button>
        </div>
      </div>
        </div>
    )
}
export default Jambo;