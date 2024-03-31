import React from 'react';
import { Link} from 'react-router-dom';
import { BsBookmarkHeart } from "react-icons/bs";
import { useFavorites } from '../redux/hooks/useFavorites';
import cl from '../styles/Main.module.css'

function Header() {
  

  const {favorites} = useFavorites()

  return ( 
    
      <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <Link to={`/`}>Home</Link>
      <Link to={`/basket`} className={cl.favorites}>
      <BsBookmarkHeart className={cl.icon}/>
      <span className={cl.count}>{favorites.length}</span>
      </Link>
      
      </header>
    );
}

export default Header;
