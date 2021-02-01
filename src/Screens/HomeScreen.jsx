import React from 'react';

import University from'../Components/University';

import Jumbo from '../Components/Jambo';
import data from '../data';


import unidata from '../unidata';
const HomeScreen = () =>
{
    return(
        <div>      
            <Jumbo header ={data.info.header} message = {data.info.message}/>
            <div className="container">
                <div className="university-items">
                    <div className="row">
                        {
                            unidata.universities.map((university)=>(
                                <University key = {university.name} university = {university}/>
                            ))
                        }
                    </div>
                </div>
            </div>
         
        </div>
    )
}
export default HomeScreen;
