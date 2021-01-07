import React from 'react';

const Footer = () => 
{
    return (
        <div>
             <footer className="bg-dark text-white  footer-content text-lg-start">
            
                <div className="container p-4">
       
                <div className="row">
                
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contribute to Opensource</h5>
                        <p>
                        Contribute to the most amazing useful tools around the world and create a developer
                        community arround us. 
                        </p>
                    </div>
                    <div className="col-6">
                        <img src="assets\pics\undraw_work_together_h63l.svg" alt="" className="img-fluid"/>
                    </div>
                    
                </div>
       
                </div>
          
             
                <div className="text-center p-3 footer-end">
                Open Source ❤ LITHAXOR
                </div>
                
            </footer>
        </div>
    )
}

export default Footer;