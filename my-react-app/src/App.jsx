import { Navbar } from "./header/Navbar";
import { Home } from "./header/Home";
import { Screen1 } from "./Screen/Screen1";
import { Screen2 } from "./Screen/Screen2";
import { Screen3 } from "./Screen/Screen3";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Screen4 } from "./Screen/Screen4";
import {Screen5} from "./Screen/Screen5.jsx";
import { Screen6 } from "./Screen/Screen6.jsx";


function App() {
  return (
    
    <>
      
      <Navbar />
      <Home />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6 />
      
      

      
      <p className='display-5'></p>
    </>
  );
}

export default App;