import React ,{useState} from 'react';
import "./Header.css";
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {app} from '../../firebase.config';
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import {MdShoppingBasket,MdAdd,MdLogout} from "react-icons/md";
import { Link , useNavigate} from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';


function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{user,cartShow,cartItems},dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () =>{
    if(!user){
      const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider);
      dispatch({
        type:actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user',JSON.stringify(providerData[0]));
    }else{
      setIsMenu(!isMenu);
    }
  }
  const logout = () =>{
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user:null
    });
  };
  const navigate = useNavigate();
  const toCartPage = () => {
    dispatch({
      type:actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
    {cartShow && (navigate('/cart'))}
  }
  return (
    <header id='header'>
        <Link to="/"><img className="logo" src={Logo} alt="" /></Link>
        <div>
            <ul id="navbar">
                <Link to="/" className='navLink'><li>Home</li></Link>
                <Link to="/shop" className='navLink'><li>Shop</li></Link>
                <Link to="/blog" className='navLink'><li>Blog</li></Link>
                <Link to="/about" className='navLink'><li>About</li></Link>
                <Link to="/contact" className='navLink'><li>Contact</li></Link>
            </ul>
        </div>
        <div className="right">
          <h3 className="cart" onClick={()=>toCartPage()}><MdShoppingBasket/></h3>
          <img src={user ? user.photoURL : Avatar} className="avatar" onClick={login}  referrerPolicy="no-referrer" alt="" />
          {
            isMenu && (
              <div className="dropDown">
                {
                  user && user.email === "vineetchotaliya30@gmail.com" && (
                    <Link to="/createItem">
                    <p onClick={()=>setIsMenu(false)}>New Item <MdAdd className='icon'/> </p>
                    </Link>
                  )
                }
                <p onClick={logout}>Logout <MdLogout className='icon'/> </p>
              </div>
            )
          }
        </div>
    </header>
  );
}

export default Header