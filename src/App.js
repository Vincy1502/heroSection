import logo from './logo.svg';
import './App.css';
import Home from './component/home/home';
import About from './component/about/about';
import Contact from './component/contact/contact';
import Blog from './component/blogs/blogs'
import Feature from './component/features/feature';
import Product from './component/products/product';
import Project from './component/projects/project';
import Service from './component/services/service';
import Support from './component/support/support';
import Help from './component/help/help';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/feature' element={<Feature/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Support' element={<Support/>}/>
      <Route path='/Help' element={<Help/>}/>
    </Routes>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Blog/> */}
    </>
  );
}

export default App;
