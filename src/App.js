import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Navbar/Header';
import MainContainer from './components/Home/MainContainer';
import CreateContainer from './components/AddItem/CreateContainer';
import { useStateValue } from './context/StateProvider';
import { getAllData } from './utils/firebaseFunctions';
import { useEffect } from 'react';
import { actionType } from './context/reducer';
import Shop from './components/ShopPage/Shop';
import Blog from './components/Blog/Blog';
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/Contact/ContactUs';
import CartContainer from './components/Cart/CartContainer';
import SingleItem from './components/ShopPage/SingleItem';

function App() {
  const [{ clothes },dispatch] = useStateValue();
  const fetchData = async () =>{
    await getAllData().then((data) => {
      dispatch({
        type: actionType.SET_CLOTHES,
        clothes:data
      })
    });
  };
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/*' element={<MainContainer />} />
          <Route path='/createItem' element={<CreateContainer/>}/>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='/item' element={<SingleItem/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
