import { useActions } from "../redux/hooks/useActions";
import { useFavorites } from "../redux/hooks/useFavorites";

import style from "../styles/Item.module.css";

export default function Item({item}) {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();
  const isExist = favorites.some(r => r.id === item.id);
  return (
    <div key={item.id} className={style.main}>
      {item.brand}, id:
      {item.id}
      <div className={style.images}>
        <img src={item.photos} />
      </div>
      <span className={style.category}>Body type: {item.category}</span>
      <button onClick={() => toggleFavorites(item)}>
        {isExist ? "Remove from": "Add to"}{" "}favorites
      </button>
    </div>
  );
}
