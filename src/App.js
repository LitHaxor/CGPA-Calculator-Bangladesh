import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';

import CGPAScreen from './Screens/CGPAScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      
      <main>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/cgpa/:name' component ={CGPAScreen}/>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
