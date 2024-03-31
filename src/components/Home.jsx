import { useSelector } from "react-redux";
import { useGetRecipesQuery } from "../redux/API/api";
import { useActions } from '../redux/hooks/useActions'
import { useFavorites } from '../redux/hooks/useFavorites';
import { useCounter } from "../redux/hooks/useCounter";
import CreateRecipe from "./CreacteRecipe";
import Item from './Item';
import style from "../styles/Main.module.css";

const userId = 1;

export default function Home() {
  const { increment, decrement } = useActions();
  const { count } = useCounter();
  const { isLoading } = useSelector((state) => state.user);
  const { data } = useGetRecipesQuery(undefined, {
    skip: !userId,
  });
  console.log("Data:", data)

  
  return (
    <div className="App">
      <CreateRecipe />
      <div className={style.content}>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map(item => <Item key={item.id} item={item}/>)
        ) : (
          <h3 style={{margin: "7vw auto"}}>Not found</h3>
        )}
      </div>
    </div>
  );
}

/*     <div>
<button aria-label="Increment value" onClick={() => increment()}>
Increment
</button>

<span>{count}</span>

<button aria-label="Decrement value" onClick={() => decrement()}>
Decrement
</button>
</div>
*/
