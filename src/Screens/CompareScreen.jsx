import React from 'react';
import CompareApp from '../tools/compareApp';
import Jumbo from '../Components/Jambo'
const CompareScreen = () =>{
    return(
        <div>
            <Jumbo header="CGPA Compare Tools" message ="Compare cgpa with other universities"/>
            <CompareApp/> 
        </div>
    )
}

export default CompareScreen;