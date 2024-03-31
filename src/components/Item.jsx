import { useActions } from "../redux/hooks/useActions";
import { useFavorites } from "../redux/hooks/useFavorites";

import style from "../styles/Item.module.css";

export default function Item({item}) {
  const { favorites } = useFavorites();
  const { toggleFavorites, wiewResult } = useActions();
  const isExist = favorites.some(r => r.id === item.id);
  return (
    <div key={item.id} className={style.main}>
      {item.name}
      {item.id}
      <div className={style.images}>
        {item.photos.map((element, id) => (
          <img key={id} src={element} />
        ))}
      </div>
      <span className={style.category}>Категория: {item.category}</span>
      <button onClick={() => toggleFavorites(item)}>
        {isExist ? "Remove from": "Add to"}{" "}favorites
      </button>
    </div>
  );
}
