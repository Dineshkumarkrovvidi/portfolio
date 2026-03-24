
import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import Services from './component/Services';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Personal from './component/Personal';
import Skill2 from './component/Skill2';

function App() {
  return (
    <div className="bg-gray-900 text-white">
       <Nav/>
       <Home/>
       <Skill2/>
       <Services/>
       <Projects/>
       <div className='flex flex-wrap justify-center items-center'>
       <Contact/>
       <Personal/>
       </div>
    </div>
  );
}

export default App;
