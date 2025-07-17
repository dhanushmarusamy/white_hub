import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Shop1 from './pages/Shop1';
import Retail from './pages/Retail';
import Veganice from './pages/Veganice';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Upload1 from './pages/Upload1';
import Getdelete from './pages/Getdelete';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Register from './pages/Register';
import Validation from './pages/Validation';
import Singlecrud from './pages/Singlecrud';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop1/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Retail' element={<Retail/>}/>
        <Route path='/veganice' element={<Veganice/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/k' element={<Upload1/>}/>
        <Route path='/n' element={<Getdelete/>}/>
<Route path='edit/:id'element={<Edit/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/validation'element={<Validation/>}/>
      <Route path='/single' element={<Singlecrud/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* <Retail/> */}
      {/* <Shop1/> */}
      {/* <Header/>
      
      <Home/>
      <Footer/>
      <About/>
      <Footer/>
      <Blog/>
      <Footer/>
      <Veganice/>
      <Footer/> */}
    </div>
  );
}

export default App;
