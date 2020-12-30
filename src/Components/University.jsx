import React from 'react';


const University = (props) =>
{
    const {university} = props;
    return (
       
            <div key={university._name} className="col-md-2 col-sm-4 col-6 card-space">
                <div className="card">
                    <div className="card-body max-he">
                        <img src={university.logo} alt="" className="img-fluid mx-auto d-block"/>
                        <h4 className="card-title text-center">{university.name}</h4>
                        <div className="text-center">
                            <p><b>Calculator</b></p>
                            <a className="card-link" href={`/cgpa/${university._name}`}>CGPA</a>
                            <a href="/" className="card-link">Cost</a>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}

export default University;