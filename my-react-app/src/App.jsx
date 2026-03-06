import { Home } from "./header/Home";
import { Navbar } from "./header/Navbar";
import { Klist } from "./list/Klist";
import { Llist } from "./list/Llist";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <>
      <Navbar />
      <Home />
      <Klist />
      <Llist />
      <p className='display-5'>we can type her</p>
    </>
  );
}

export default App;