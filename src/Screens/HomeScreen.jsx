import React from 'react';

import University from'../Components/University';
import Nav from '../Components/navbar';
import Jumbo from '../Components/Jambo';
import data from '../data';
import Footer from '../Components/footer';

import unidata from '../unidata';
const HomeScreen = () =>
{
    return(
        <div>
            <Nav/>
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
            <Footer/>
        </div>
    )
}
export default HomeScreen;