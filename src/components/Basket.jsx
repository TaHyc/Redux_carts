import { useFavorites } from "../redux/hooks/useFavorites";
import style from "../styles/Main.module.css";

export default function Basket() {
  const { favorites } = useFavorites();
  console.log("Страница корзины", favorites);
  if (favorites.length == 0) {
    return <h3 style={{color: "gray", marginTop:"10vw"}}>Вы ничего не добавили</h3>;
  } else
    return (
      <div className="App">
        {favorites.map((item) => (
          <div key={item.id} className={style.main}>
            {item.name}
            {item.id}
            <div className={style.images}>
              {item.photos.map((element, id) => (
                <img key={id} src={element} />
              ))}
            </div>
            <span className={style.category}>Категория: {item.category}</span>
          </div>
        ))}
      </div>
    );
}
