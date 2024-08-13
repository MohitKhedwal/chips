import './App.css';
import Sliderr from './Components/Container/Sliderr';
import Footer from './Components/Pages/Footer';
import Login from './Components/Pages/Login/Client/Login';
import Navbar from './Components/Pages/Navbar';
import Info from './Components/Container/Info';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
   {/* <Info/> */}
   <Navbar/>
<main className=' flex-grow'>
<Outlet/>
</main>
<Footer className="sticky bottom-0"/>
</>

  
  );
}

export default App;


{/* <Navbar/>
<main className='h-full flex-grow  '>
<Outlet/>
</main>
<Footer className="sticky bottom-0"/>
</> */}