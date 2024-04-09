import { useFavorites } from "../redux/hooks/useFavorites";
import style from "../styles/Main.module.css";
import Item from './Item';

export default function Basket() {
  const { favorites } = useFavorites();
  console.log("Страница корзины", favorites);
  if (favorites.length == 0) {
    return <h3 style={{color: "gray", marginTop:"10vw"}}>Вы ничего не добавили</h3>;
  } else
    return (
      <div className="App">
        {favorites.map((item) => <Item key={item.id} item={item}/>)}

        
      </div>
    );
}
