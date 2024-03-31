import { useState } from "react";
import { useCreateRecipeMutation } from "../redux/API/recipe.api";
import style from "../styles/Item.module.css";

export default function CreateRecipe() {
  const defaultValue = {
    id: null,
    name: "",
    category: 0,
    photos: [],
  };

  const [recipe, setResipe] = useState(defaultValue);

  const [creacteRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    creacteRecipe(recipe).then(() => {
      setResipe(defaultValue);
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        Создать свой:
        <div className={style.row}>
        <label><input type="text" placeholder="Name" value={recipe.name}
            onChange={(e) => setResipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label><input type="number" placeholder="Category" value={recipe.category}
            onChange={(e) =>
              setResipe({ ...recipe, category: parseInt(e.target.value, 10) })
            }
          />
        </label>
        <label><input type="text" placeholder="Photos" value={recipe.photos}
            onChange={(e) =>
              setResipe({...recipe,photos: recipe.photos.concat(e.target.value)})
            }
          />
        </label>
        </div>
        <button type="submit" className={style.createButton}>Create</button>
      </form>
  );
}
