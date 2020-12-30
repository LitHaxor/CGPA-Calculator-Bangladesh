import React from 'react';
import Nav from '../Components/navbar';
import Jumbo from '../Components/Jambo';
import Footer from '../Components/footer';
import Calc from '../tools/CalcApp';
import unidata from '../unidata';
const CGPAScreen = (props) =>
{
    const university = unidata.universities.find((x)=> x._name === props.match.params.name);
    if(!university)
    {
        return( 
            <div>University Not found!</div>
        )
    }
    return(
        <div>
            <Nav/>
            <Jumbo header={university.name} message={university.description} />
            <Calc points={university.points} grades={university.grades}/>
            <Footer></Footer>
        </div>
    )
}
export default CGPAScreen;