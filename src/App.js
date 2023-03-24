import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Link, Route ,Routes} from 'react-router-dom'
import Bookchapter from './Components/Bookchapter';
import Journal from './Components/Journal';

const App = () => {
  

  return (
  <div className="App">
    <Sidebar/>
  </div>
  )


  
}

export default App;

