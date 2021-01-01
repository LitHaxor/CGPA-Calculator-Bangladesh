import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CompareScreen from './Screens/CompareScreen';
import CGPAScreen from './Screens/CGPAScreen';
import Nav from './Components/navbar';
import Footer from './Components/footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Nav/>
      <main>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/compare' component={CompareScreen}/>
        <Route path='/cgpa/:name' component ={CGPAScreen}/>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
