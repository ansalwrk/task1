import { Home } from "./header/Home";
import { Navbar } from "./header/Navbar";
import { Screen1 } from "./Screen/Screen1";
import { Screen2 } from "./Screen/Screen2";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <>
      <Navbar />
      <Home />
      <Screen1 />
      <Screen2 />
      <p className='display-5'>we can type her</p>
    </>
  );
}

export default App;